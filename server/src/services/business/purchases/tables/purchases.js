import knex from "../../../database/knex/index.js";

/**
 * Returns a knex instance with the `purchases` table.
 * @param { import("knex").Knex.Transaction } transaction  The transaction to be used.
 * @returns { import("knex").Knex } A Knex query builder.
 */
function purchases(transaction) {
	return knex("purchase").transacting(transaction);
}

export default purchases;
