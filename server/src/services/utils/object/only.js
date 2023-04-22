function only(obj, ...keys) {
	return Object.entries(obj).reduce(
		(obj, [key, value]) =>
			keys.includes(key) ? { ...obj, [key]: value } : obj,
		{}
	);
}

export default only;
