/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	await knex.schema.createTable("purchase", function (table) {
		table.increments("id");
		table.string("name");
		table.decimal("price", 12, 2);
		table.integer("userId").unsigned().references("users.id")
		table.integer("plansId").unsigned().references("plans.id");
		table.string("statusPurchase").defaultTo("N PROGRESS");
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
	return knex.schema.dropTable("purchase");
}
