import knex from "../../../database/knex/index.js";

/**
 * Returns a knex instance with the `users` table.
 * @param { import("knex").Knex.Transaction } transaction  The transaction to be used.
 * @returns { import("knex").Knex } A Knex query builder.
 */
function users(transaction) {
	return knex("users").transacting(transaction);
}

export default users;
