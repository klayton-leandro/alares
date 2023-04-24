import ExistenceViolation from "./existence-violation.js";

function assertExistence(condition, message) {
	if (condition) return condition;
	throw new ExistenceViolation(message);
}

export default assertExistence;
