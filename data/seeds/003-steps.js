
exports.seed = function(knex) {
  return knex('steps').insert([
    { recipe_id: 1, step_number: 1, ingredient_id: 1, quantity: '1 cup'},
    { recipe_id: 1, step_number: 2, ingredient_id: 2, quantity: '1 cup'},
    { recipe_id: 1, step_number: 3, ingredient_id: 3, quantity: '1 cup'},
    { recipe_id: 1, step_number: 4, ingredient_id: 4, quantity: '2 tsp'},
    { recipe_id: 1, step_number: 5, ingredient_id: 5, quantity:'2 large'},
    { recipe_id: 1, step_number: 6, ingredient_id: 6, quantity: '3 cups'},
    { recipe_id: 1, step_number: 7, ingredient_id: 7, quantity: '1 tsp'},
    { recipe_id: 1, step_number: 8, ingredient_id: 8, quantity: '1/2 tsp'},
    { recipe_id: 1, step_number: 9, ingredient_id: 9, quantity: '1 tsp'},
    { recipe_id: 1, step_number: 10, ingredient_id: 10, quantity: '2 cups'},
    { recipe_id: 2, step_number: 1, ingredient_id: 11, quantity: '2 slices'},
    { recipe_id: 2, step_number: 2, ingredient_id: 12, quantity: '1 teaspoon'},
    { recipe_id: 2, step_number: 3, ingredient_id: 13, quantity: '2 teaspoons'},
    { recipe_id: 3, step_number: 1, ingredient_id: 5, quantity: '3 large'},
    { recipe_id: 3, step_number: 2, ingredient_id: 14, quantity: '1 slice chopped'},
    { recipe_id: 3, step_number: 3, ingredient_id: 15, quantity: '1 slice'},
    { recipe_id: 4, step_number: 1, ingredient_id: 11, quantity: '2 slices'},
    { recipe_id: 4, step_number: 2, ingredient_id: 14, quantity: '3 slices'},
    { recipe_id: 4, step_number: 3, ingredient_id: 15, quantity: '1 slice'},
    { recipe_id: 4, step_number: 4, ingredient_id: 16, quantity: '2 dollops'}
  ]);
};