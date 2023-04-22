import Joi from "joi";

const percentage = Joi.number().precision(3).max(100).min(0).required();

export default percentage;
