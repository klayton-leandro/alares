import ALPHABET from "../consts/alphabet.js";

const letterNumberRelationship = ALPHABET.reduce(
	(map, letter, index) => map.set(letter, index + 1),
	new Map()
);

function letterToNumber(letter) {
	return letterNumberRelationship.get(`${letter}`.toLowerCase());
}

export default letterToNumber;
