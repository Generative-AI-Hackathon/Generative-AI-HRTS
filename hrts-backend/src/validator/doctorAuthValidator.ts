import Joi from "joi"



export const DoctorSignUpValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().default(""),
  fullName: Joi.string().min(3).required(),
  phone: Joi.string().min(10).required(),
  headline: Joi.array().items(Joi.string().min(3).required()),
  hospital: Joi.string().min(8).required(),
  gender: Joi.string().valid("male", "female").required(),
});


export const DoctorSignInValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})


