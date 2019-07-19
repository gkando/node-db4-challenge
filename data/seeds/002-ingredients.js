
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'salted butter'},
    { ingredient_name: 'white sugar'},
    { ingredient_name: 'light brown sugar'},
    { ingredient_name: 'pure vanilla extract'},
    { ingredient_name: 'eggs'},
    { ingredient_name: 'all purpose flower'},
    { ingredient_name: 'baking soda'},
    { ingredient_name: 'baking powder'},
    { ingredient_name: 'sea salt'},
    { ingredient_name: 'chocolate chips'},
    { ingredient_name: 'honey wheat bread'},
    { ingredient_name: 'creamy peanutbutter'},
    { ingredient_name: 'strawberry preserves'},
    { ingredient_name: 'ham'},
    { ingredient_name: 'cheese'},
    { ingredient_name: 'mayonaise'}
  ]);
};