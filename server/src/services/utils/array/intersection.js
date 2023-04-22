function intersection(...arrays) {
	return arrays.reduce((carry, current) =>
		carry.filter((item) => current.includes(item))
	);
}

export default intersection;
