import knex from "../../../database/knex/index.js";

/**
 * Returns a knex instance with the `roles` table.
 * @param { import("knex").Knex.Transaction } transaction  The transaction to be used.
 * @returns { import("knex").Knex } A Knex query builder.
 */
function roles(transaction) {
	return knex("roles").transacting(transaction);
}

export default roles;
