import ExistenceViolation from "./existence-violation.js";

function ignoreExistenceViolation(value) {
	return (error) => {
		if (error instanceof ExistenceViolation) return value;
		throw error;
	};
}

export default ignoreExistenceViolation;
