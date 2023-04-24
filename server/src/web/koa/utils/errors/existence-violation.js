import Violation from "./violation.js";

class ExistenceViolation extends Violation {
	constructor(message) {
		super(message);
		this.name = "ExistenceViolation";
	}
}

export default ExistenceViolation;
