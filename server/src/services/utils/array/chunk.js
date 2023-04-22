function chunk(arr, amount, i = 0) {
	if (i >= arr.length) return [];
	return [arr.slice(i, i + amount), ...chunk(arr, amount, i + amount)];
}

export default chunk;
