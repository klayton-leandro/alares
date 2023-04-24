import assert from "assert";
import ConstraintViolation from "./constraint-violation.js";

function inCaseOfConstraintViolation(handler) {
	assert.equal(typeof handler, "function");
	return (error) => {
		if (error instanceof ConstraintViolation) {
			return handler(error);
		}

		throw error;
	};
}

export default inCaseOfConstraintViolation;
