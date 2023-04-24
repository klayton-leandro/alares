import PermissionViolation from "./permission-violation.js";

function ignorePermissionViolation(value) {
	return (error) => {
		if (error instanceof PermissionViolation) return value;
		throw error;
	};
}

export default ignorePermissionViolation;
