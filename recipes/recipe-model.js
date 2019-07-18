const knex = require('knex');

const configOptions = require('../knexfile').development;

module.exports = knex(configOptions);
const db = knex(configOptions);

module.exports = {
  find,
  findSteps,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('recipes');
}

function findSteps(id) {
  console.log(id)
  return db('recipes as r')
    .join('steps as s', 'r.id', 's.recipe_id')
    .join('ingredients as i', 's.ingredient_id', 'i.id')
    .select('r.recipe_name', 's.step_number', 'i.ingredient_name')
    .where('r.id', id)
}

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function add(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(id, changes) {
  return db('recipes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('recipes')
    .where('id', id)
    .del();
}