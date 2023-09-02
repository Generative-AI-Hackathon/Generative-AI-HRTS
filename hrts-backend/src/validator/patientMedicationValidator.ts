import Joi from "joi";

export const CreateMedicationValidator = Joi.object({
  name: Joi.string().min(3).required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().default(null),
  userId: Joi.string().min(8).required(),
  hospitalId: Joi.string().min(8),
  doctorId: Joi.string().min(8),
});

export const UpdateMedicationValidator = Joi.object({
  name: Joi.string().min(3).required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().default(null),
  userId: Joi.string().min(8).required(),
  hospitalId: Joi.string().min(8),
  doctorId: Joi.string().min(8),
  medicationId: Joi.string().min(8).required(),
});
