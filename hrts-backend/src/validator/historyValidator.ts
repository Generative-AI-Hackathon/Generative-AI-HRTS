import Joi from "joi";

export const CreateHistoryValidator = Joi.object({
  type: Joi.string().min(3).required(),
  description: Joi.string().min(20).required(),
  userId: Joi.string().min(8).required(),
  hospitalId: Joi.string().min(8).required(),
  doctorId: Joi.string().min(8).required(),
});

export const UpdateHistoryValidator = Joi.object({
  type: Joi.string().min(3).required(),
  description: Joi.string().min(20).required(),
  userId: Joi.string().min(8).required(),
  hospitalId: Joi.string().min(8).required(),
  doctorId: Joi.string().min(8).required(),
  historyId: Joi.string().min(8).required(),
});
