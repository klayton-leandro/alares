/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	await knex.schema.createTable("users", function (table) {
		table.increments("id");
		table.string("name");
		table.string("email");
		table.string("password");
		table.string("phone");
		table.integer("roleId").unsigned().references("roles.id");
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
	return knex.schema.dropTable("users");
}
