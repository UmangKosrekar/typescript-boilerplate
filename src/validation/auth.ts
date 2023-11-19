import joi from "joi";

export const registerValidation = joi
  .object()
  .keys({
    email: joi.string().email().required(),
    password: joi.string().required()
  })
  .required();
