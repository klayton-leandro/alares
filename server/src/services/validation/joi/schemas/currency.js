import Joi from "joi";

const currency = Joi.number().positive().precision(2);

export default currency;
