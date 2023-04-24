import assert from "assert";
import PermissionViolation from "./permission-violation.js";

function inCaseOfPermissionViolation(handler) {
	assert.equal(typeof handler, "function");
	return (error) => {
		if (error instanceof PermissionViolation) {
			return handler(error);
		}

		throw error;
	};
}

export default inCaseOfPermissionViolation;
