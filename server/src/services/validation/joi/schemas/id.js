import Joi from "joi";

// Joi.number().integer().positive().allow(null).default(null); 
const id = Joi.alternatives(
    Joi.number().integer().positive().allow(null).default(null),
    Joi.array().items(Joi.string().allow(null).default(null))
)

export default id;
