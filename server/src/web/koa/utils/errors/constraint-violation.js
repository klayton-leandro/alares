import Violation from "./violation.js";

class ConstraintViolation extends Violation {
	constructor(message) {
		super(message);
		this.name = "ConstraintViolation";
	}
}

export default ConstraintViolation;
