import Joi from "joi";
import validationMessages from "./validation-messages.js";

/**
 * Validates the provided data with a Joi schema object.
 * @param {Object} data - The data to be validated.
 * @param {Object} schema - The schema to validate the data with.
 */
function validate(data, schema) {
	if (!Joi.isSchema(schema))
		throw new Error("The schema provided is not a Joi schema object.");

	const { error, value: validated } = schema
		.messages(validationMessages)
		.validate(data, { abortEarly: false });

	if (error) throw error;

	return validated;
}

export default validate;
