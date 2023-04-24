import Violation from "./violation.js";

class PermissionViolation extends Violation {
	constructor(message) {
		super(message);
		this.name = "PermissionViolation";
	}
}

export default PermissionViolation;
