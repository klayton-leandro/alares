import storeDefaultRoles from "../../../business/role/store-default-roles.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	await knex.schema.createTable("roles", function (table) {
		table.increments("id");
		table.string("name");
		table.string("description");
		table.boolean("enumerable").defaultTo(true);
		table.datetime("createdAt").defaultTo(knex.fn.now());
		table.datetime("updatedAt").defaultTo(knex.fn.now());
		table.datetime("deletedAt");
	});

	await storeDefaultRoles(knex);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
	await knex.schema.dropTable("roles");
}
