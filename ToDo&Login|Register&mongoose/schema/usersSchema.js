const Joi = require("joi");

const usersSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).max(65).required(),
  password: Joi.string(),
  isOnline: Joi.boolean().default(false),
});
module.exports.usersSchema = usersSchema;
