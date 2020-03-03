exports.up = async function(knex) {
  // creating our car table schema - translate the SQL
  await knex.schema.createTable('cars', table => {
    // id
    // table.integer("id").notNull().unique().primary()
    table.increments('id');
    // VIN
    table
      .integer('VIN')
      .notNull()
      .unique();
    // make
    table.text('make').notNull();
    // model
    table.text('model').notNull();
    // mileage
    table.integer('mileage').notNull();
    // status - boolean (clean/salvage - defaults clean/true)
    table.boolean('clean title').default(1);
  });
};
// allows us to delete
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars');
};
