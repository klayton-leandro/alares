function product(...arrays) {
	return arrays.reduce((carry, current) =>
		carry.flatMap((carryItem) =>
			current.map((currentItem) => [carryItem, currentItem].flat())
		)
	);
}

export default product;
