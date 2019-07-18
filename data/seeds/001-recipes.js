
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Chocolate Chip Cookies', description: 'Delicious Warm Cookies!'},
    {recipe_name: 'PB&J Sandwich', description: 'A solid conservative choice.'},
    {recipe_name: 'Scrambled Eggs with Ham and Cheese', description: 'A breakfast favorite.'},
    {recipe_name: 'Ham and Cheese Sandwich', description: 'The work horse of lunch.'}
  ]);
};
