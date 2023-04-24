import ConstraintViolation from "./constraint-violation.js";

function ignoreConstraintViolation(value) {
	return (error) => {
		if (error instanceof ConstraintViolation) return value;
		throw error;
	};
}

export default ignoreConstraintViolation;
