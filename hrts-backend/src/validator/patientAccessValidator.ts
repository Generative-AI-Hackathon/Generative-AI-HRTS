import Joi from "joi";

export const CreatePatientAccess = Joi.object({
  email: Joi.string().email().required(),
});
