import { query, body, param } from "express-validator";

export const getUsersQueryValidationChain = [
  query("filter")
    .notEmpty()
    .withMessage("(filter) can't be an empty string")
    .isString()
    .withMessage("(filter) must be string"),
  query("value")
    .notEmpty()
    .withMessage("(value) can't be an empty string")
    .isString()
    .withMessage("(value) must be string"),
];

export const putPostUserValidationChain = [
  body("username")
    .isString()
    .withMessage("(username) must be string")
    .isLength({ min: 3, max: 15 })
    .withMessage("(username) length must be 3-15 characters")
    .trim(),
  body("pin")
    .matches(/[0-9]{4}/)
    .withMessage("(pin) must be a 4 digit number ex: 1234"),
];

export const patchUserValidationChain = [
  body("username")
    .isString()
    .withMessage("(username) must be string")
    .isLength({ min: 3, max: 15 })
    .withMessage("(username) must be string of 3-15 characters")
    .trim()
    .optional(),
  body("pin")
    .matches(/[0-9]{4}/)
    .withMessage("(pin) must be a 4 digit number ex: 1234")
    .optional(),
];

export const userIdValidationChain = [
  param("id").isInt({ min: 1 }).withMessage("(id) must be an integer > 0"),
];
