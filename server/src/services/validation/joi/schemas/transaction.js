import Joi from "joi";

const transaction = Joi.object({
	transaction: Joi.any().allow(true),
}).unknown();

export default transaction;
