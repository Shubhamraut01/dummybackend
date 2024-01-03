import { validationResult } from "express-validator";

export const validationverify =  (req,res) => {
    const errors = validationResult(req);

    console.log("errors::::",errors)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
      });
    }
}