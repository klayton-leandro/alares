import ConstraintViolation from "./constraint-violation.js";

function assertConstraint(condition, message) {
	if (condition) return condition;
	throw new ConstraintViolation(message);
}

export default assertConstraint;
