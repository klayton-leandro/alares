import ignoreJoiValidationError from "./ignore-joi-validation-error.js";

function ignoreEveryJoiValidationError(value = false) {
	return (item) =>
		item instanceof Promise
			? item.catch(ignoreJoiValidationError(value))
			: item;
}

export default ignoreEveryJoiValidationError;
