import {body} from "express-validator";

export const signInValidationSchema = [
    body("username")
      .notEmpty()
      .withMessage("Username should not be empty")
      .isLength({ max: 15, min: 3 })
      .withMessage("Username should be between 3 - 15 characters"),
    body("password")
      .notEmpty()
      .withMessage("Password should not be empty")
      .isLength({ max: 18, min: 2 })
      .withMessage("Password should be between 6 - 15 characters"),
  ];