import {
  hospitalChangePassword,
  hospitalSignin,
  hospitalSignup,
} from "../controllers/hospitalAuthController";
import express from "express";

const hospitalRouter = express.Router();

//Auth

/**
 * @swagger
 * /hospital:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
hospitalRouter.post("/auth/signup", hospitalSignup);
hospitalRouter.post("/auth/signin", hospitalSignin);
// hospitalRouter.delete("/deleteaccount/:id", hospitalD);
hospitalRouter.delete("/changepassword/:id", hospitalChangePassword);

export default hospitalRouter;
