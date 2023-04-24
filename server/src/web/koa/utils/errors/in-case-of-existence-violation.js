import assert from "assert";
import ExistenceViolation from "./existence-violation.js";

function inCaseOfExistenceViolation(handler) {
	assert.equal(typeof handler, "function");
	return (error) => {
		if (error instanceof ExistenceViolation) {
			return handler(error);
		}

		throw error;
	};
}

export default inCaseOfExistenceViolation;
