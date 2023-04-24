class Violation extends Error {
	constructor(message) {
		super(message);
		this.name = "Violation";
	}
}

export default Violation;
