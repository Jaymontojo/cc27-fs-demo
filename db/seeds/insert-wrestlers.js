/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('wrestlers').del()
  await knex('wrestlers').insert([
    {first_name: 'Hulk', last_name: 'Hogan'},
    {first_name: 'Randy', last_name: 'Savage'},
    {first_name: 'Andre', last_name: 'TheGiant'},
    {first_name: 'The', last_name: 'Undertaker'},
  ]);
};
