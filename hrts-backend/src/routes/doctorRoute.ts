import {
  doctorDeleteAccount,
  doctorSignin,
  doctorSignup,
} from "../controllers/doctorAuthController";

import express from "express";

const doctorRouter = express.Router();

//Auth

/**
 * @swagger
 * /doctor:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
doctorRouter.post("/auth/signup", doctorSignup);
doctorRouter.post("/auth/signin", doctorSignin);
doctorRouter.delete("/auth/deleteaccount/:id", doctorDeleteAccount);
doctorRouter.delete("/auth/changepassword/:id", doctorDeleteAccount);

export default doctorRouter;
