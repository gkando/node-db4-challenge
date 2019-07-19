
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.text('recipe_name', 128)
      .notNullable();
    tbl.text('description')
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.text('ingredient_name')
      .notNullable();
  })
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.integer('step_number')
      .unsigned()
      .notNullable();
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.float('quantity')
      .notNullable();
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps');
};
