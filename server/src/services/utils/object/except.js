function except(obj, ...keys) {
	return Object.entries(obj).reduce(
		(obj, [key, value]) =>
			keys.includes(key) ? obj : { ...obj, [key]: value },
		{}
	);
}

export default except;
