import assert from "assert";
import Joi from "joi";

async function inCaseOfJoiValidationError(handler) {
	assert.equal(typeof handler, "function");
	return (error) => {
		if (error instanceof Joi.ValidationError) handler(error);
		throw error;
	};
}

export default inCaseOfJoiValidationError;
