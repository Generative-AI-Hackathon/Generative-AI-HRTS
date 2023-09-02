import Joi from "joi";

export const CreateHistoryValidator = Joi.object({
  type: Joi.string().min(3).required(),
  description: Joi.date().required(),
  userId: Joi.string().min(8).required(),
  hospitalId: Joi.string().min(8),
  doctorId: Joi.string().min(8),
});

export const UpdateHistoryValidator = Joi.object({
  type: Joi.string().min(3).required(),
  description: Joi.date().required(),
  userId: Joi.string().min(8).required(),
  hospitalId: Joi.string().min(8),
  doctorId: Joi.string().min(8),
  historyId: Joi.string().min(8).required(),
});
