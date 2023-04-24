import PermissionViolation from "./permission-violation.js";

function assertPermission(condition, message) {
	if (condition) return;
	throw new PermissionViolation(message);
}

export default assertPermission;
