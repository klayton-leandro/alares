import Joi from "joi";
import validationMessages from "./validation-messages.js";

function expect(args, ...schemas) {
	args = Array.from(args);

	const schema = Joi.array().items(...schemas);

	const { error, value: validated } = schema
		.messages(validationMessages)
		.validate(data, { abortEarly: false });

	if (error) throw error;

	return validated;
}

export default expect;
