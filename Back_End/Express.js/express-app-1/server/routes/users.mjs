import { Router } from "express";
import { read_data } from "../../db/users.mjs";
import { getUserById } from "../utils.mjs";
import {
  getUsersHandler,
  getUserByIdHandler,
  userPatchHandler,
  userPutHandler,
  userPostHandler,
  userDeleteHandler,
} from "./../middlewares.mjs";
import { SESSION_LIFE, LOGIN_LIFE, AUTH_PIN } from "./constants.mjs";

const router = Router();

router.post("/users/login", (req, res) => {
  const {
    body: { username, pin },
  } = req;
  const { users } = read_data();
  const findUser = users.find((user) => user.username === username);

  if (!findUser || findUser.pin !== pin) {
    const msg = "Bad Credentials - wrong (username) of (pin) 💩";
    return res.status(400).render("message", { msg });
  }

  const authCookie = [
    "logedIn",
    { userID: findUser.id },
    { maxAge: LOGIN_LIFE },
  ];
  const msg = `Welcome ${
    findUser.username
  } - You are loged in now - you have (${LOGIN_LIFE / (1000 * 60)} minutes) ⌛`;

  res
    .cookie(...authCookie)
    .status(200)
    .render("message", { msg });
});

router.post("/users/logout", (req, res) => {
  if (!req.cookies.logedIn) {
    const msg = "You are not loged in to logout dummy 😒";
    return res.status(401).render("message", { msg });
  }

  // [1] destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
  });
  const msg = "Loged out successfully 👋";
  // [2] clear the (logedIn) cookie
  res.clearCookie("logedIn").status(200).render("message", { msg });
});

router.post("/users/auth", (req, res) => {
  const {
    body: { PIN },
  } = req;

  if (!req.cookies.logedIn) {
    const msg = `You should login first 💩`;
    return res.status(401).render("message", { msg });
  }

  const loginUser = getUserById(+req.cookies.logedIn.userID);
  const isAdmin = loginUser.admin;
  let msg = "";

  if (isAdmin) {
    msg = `Authentication is not required for admin - sid:(${
      req.sessionID
    }) - session life is (${SESSION_LIFE / (60 * 1000)} minutes) ⌛`;
  } else if (PIN !== AUTH_PIN) {
    msg = `Wrong Authentication PIN (${PIN}) - please try again 💩`;
    return res.status(401).render("message", { msg });
  } else {
    msg = `Authenticated successfully ✅ sid:(${
      req.sessionID
    }) - session life is (${SESSION_LIFE / (60 * 1000)} minutes) ⌛`;
  }

  // open the session for the user
  req.session.authorized = true;
  res.status(200).render("message", { msg });
});

router.get("/users", getUsersHandler);

router.get("/users/:id", getUserByIdHandler);

router.patch("/users/:id", userPatchHandler);

router.put("/users/:id", userPutHandler);

router.post("/users", userPostHandler);

router.delete("/users/:id", userDeleteHandler);

export default router;
