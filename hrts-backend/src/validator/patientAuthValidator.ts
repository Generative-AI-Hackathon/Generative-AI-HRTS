import Joi from "joi"



export const PatientSignUpValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().default(""),
  name: Joi.string().min(3).required(),
  phone: Joi.string().min(3).required(),
  birthDate: Joi.date().required(),
  gender: Joi.string().valid("male", "female").required(),
});


export const PatientSignInValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})


