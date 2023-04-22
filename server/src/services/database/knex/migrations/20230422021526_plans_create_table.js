/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	await knex.schema.createTable("plans", function (table) {
		table.increments("id");
		table.string("name");
		table.integer("userId").unsigned().references("users.id");
		table.datetime("createdAt").defaultTo(knex.fn.now());
		table.datetime("updatedAt").defaultTo(knex.fn.now());
		table.datetime("deletedAt");
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
	return knex.schema.dropTable("plans");
}
