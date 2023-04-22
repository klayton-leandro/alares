import Joi from "joi";

function ignoreJoiValidationError(value) {
	return (error) => {
		if (error instanceof Joi.ValidationError) return value;
		throw error;
	};
}

export default ignoreJoiValidationError;
