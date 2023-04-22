import _currency from "currency.js";

function currency(value, options) {
	return _currency(value, { ...options });
}

export default currency;
