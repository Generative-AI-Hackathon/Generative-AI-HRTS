import Joi from "joi"



export const HospitalSignUpValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().default(""), 
    fullName: Joi.string().min(3).required(),
    address: Joi.string().min(3).required(),
    city: Joi.string().min(3).required(),
    phone: Joi.string().min(3).required(),
    type: Joi.string().min(3).required(),
    services: Joi.array().items(Joi.string().min(3).required()),
    description: Joi.string().min(3).required(),
    doctorCount: Joi.number().default(0),
    historyCount: Joi.number().default(0),
    doctors: Joi.array().default([]),
})


export const HospitalSignInValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})


