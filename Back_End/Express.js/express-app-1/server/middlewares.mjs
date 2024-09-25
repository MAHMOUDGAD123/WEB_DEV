import { read_data, write_data } from "../db/users.mjs";
import { validationResult, matchedData } from "express-validator";
import { users_template } from "../templates/users_template.mjs";
import { getUserById } from "./utils.mjs";
import {
  userIdValidationChain,
  getUsersQueryValidationChain,
  patchUserValidationChain,
  putPostUserValidationChain,
} from "./validationChains.mjs";

const authenticationHandler = (req, res, next) => {
  if (!req.cookies.logedIn) {
    const msg = "Please login first 😒";
    return res.status(401).render("message", { msg });
  }

  const loginUser = getUserById(+req.cookies.logedIn.userID);
  const isAdmin = loginUser.admin;

  if (!isAdmin && !req.session.authorized) {
    const msg = "Authentication Required 😎";
    return res.status(401).render("message", { msg });
  }

  // pass it to the next handler
  req.loginUser = loginUser;

  next();
};

const adminAthenticationHandler = (req, res, next) => {
  const { loginUser } = req;

  if (!loginUser.admin) {
    const msg = "Error - only admin (MG) authorized 💩";
    return res.status(403).render("message", { msg });
  }

  next();
};

const adminProtectionHandler = (req, res, next) => {
  const { id } = req;

  if (id === 1) {
    const msg = "Error - admin data is forbidden 😡";
    return res.status(403).render("message", { msg });
  }

  next();
};

const dataAccessHandler = (req, res, next) => {
  const { loginUser } = req;
  const { id } = req;

  if (!loginUser.admin && loginUser.id !== id) {
    const msg = "Error - you aren't authorized 💩";
    return res.status(403).render("message", { msg });
  }

  next();
};

const userNamePinErrorHandler = (req, res, next) => {
  const valResult = validationResult(req);

  if (!valResult.isEmpty()) {
    const errors = valResult.array();
    let msg = `Error`;

    for (const error of errors) {
      msg += ` - ${error.msg}`;
    }
    return res.status(400).render("message", { msg });
  }

  next();
};

const userIdValidation = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const valResult = validationResult(req);

  if (!valResult.isEmpty()) {
    const msg = `Error - (${id}) is an invalid id 💩`;
    return res.status(400).render("message", { msg });
  }

  const { users } = read_data();
  const userIndex = users.findIndex((user) => user.id === +id);

  if (userIndex === -1) {
    const msg = `User not found - user with id of (${id}) not found 💩`;
    return res.status(404).render("message", { msg });
  }

  // save data for the next callback middleware
  req.users = users;
  req.userIndex = userIndex;
  req.id = +id;

  next();
};

export const userIdValidationHandler = [
  userIdValidationChain,
  userIdValidation,
];

export const getUsersHandler = [
  authenticationHandler,
  adminAthenticationHandler,
  getUsersQueryValidationChain,
  (req, res, next) => {
    const valResult = validationResult(req);
    const { users } = read_data();

    if (valResult.isEmpty()) {
      const { filter, value } = matchedData(req);

      const filteredUsers = users.filter((user) =>
        user[filter].toLowerCase().startsWith(value)
      );

      const template = users_template(filteredUsers);
      return res.status(200).render("users", { template });
    }

    res.status(200).render("users", { template: users_template(users) });

    next();
  },
];

export const getUserByIdHandler = [
  authenticationHandler,
  userIdValidationHandler,
  dataAccessHandler,
  (req, res) => {
    const { users, userIndex } = req;
    res.status(200).render("user", { user: users[userIndex] });
  },
];

export const userPatchHandler = [
  authenticationHandler,
  adminProtectionHandler,
  userIdValidationHandler,
  adminProtectionHandler,
  dataAccessHandler,
  patchUserValidationChain,
  userNamePinErrorHandler,
  (req, res) => {
    const { users, userIndex, id } = req;

    const validRecords = matchedData(req);

    if (!validRecords.username && !validRecords.pin) {
      const msg =
        "Error - Nothing to update you should provide a (username: string) or (pin: string) 💩";
      return res.status(400).render("message", { msg });
    }

    users[userIndex] = { ...users[userIndex], ...validRecords, id: id };

    write_data({ users });

    const msg = "User updated successfully ✅";

    // [1] destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
    });

    // [2] clear the (logedIn) cookie
    res
      .clearCookie("logedIn")
      .status(201)
      .render("action", { data: users[userIndex], msg });
  },
];

export const userPutHandler = [
  authenticationHandler,
  adminProtectionHandler,
  userIdValidationHandler,
  adminProtectionHandler,
  dataAccessHandler,
  putPostUserValidationChain,
  userNamePinErrorHandler,
  (req, res) => {
    const { users, userIndex, id } = req;

    const validRecords = matchedData(req);
    users[userIndex] = { ...users[userIndex], ...validRecords, id: id };

    write_data({ users });

    const msg = "User updated successfully ✅";

    // [1] destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
    });

    // [2] clear the (logedIn) cookie
    res
      .clearCookie("logedIn")
      .status(201)
      .render("action", { data: users[userIndex], msg });
  },
];

export const userPostHandler = [
  authenticationHandler,
  adminAthenticationHandler,
  putPostUserValidationChain,
  userNamePinErrorHandler,
  (req, res) => {
    const { users } = read_data();

    const { username, pin } = matchedData(req);
    const userId = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = {
      id: userId,
      username: username,
      pin: pin,
      admin: false,
    };

    users.push(newUser);
    write_data({ users });
    const msg = "User added successfully ✅";
    res.status(201).render("action", { data: newUser, msg });
  },
];

export const userDeleteHandler = [
  authenticationHandler,
  adminAthenticationHandler,
  userIdValidationHandler,
  adminProtectionHandler,
  dataAccessHandler,
  (req, res) => {
    const { id, users, userIndex } = req;

    users.splice(userIndex, 1);
    write_data({ users });

    const msg = `User with id (${id}) deleted successfully ✅`;
    res.status(200).render("message", { msg });
  },
];
