import knex from "../../../database/knex/index.js";

/**
 * Returns a knex instance with the `plans` table.
 * @param { import("knex").Knex.Transaction } transaction  The transaction to be used.
 * @returns { import("knex").Knex } A Knex query builder.
 */
function plans(transaction) {
	return knex("plans").transacting(transaction);
}

export default plans;
