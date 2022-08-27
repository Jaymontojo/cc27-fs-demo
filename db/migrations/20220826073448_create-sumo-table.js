/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("wrestlers", (table) => {
    table.increments("id");
    table.string("first_name", 255)
      .notNullable();
    table.string("last_name", 255)
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema
    .dropTable('wrestlers');
};
