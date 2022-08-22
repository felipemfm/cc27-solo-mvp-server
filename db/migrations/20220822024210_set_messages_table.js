/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("message_data", (table) => {
    table.increments("id");
    table.string("access_token", 64).notNullable();
    table.string("user_name", 64).notNullable();
    table.text("message").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("message_data");
};
