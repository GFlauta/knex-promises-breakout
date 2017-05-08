
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {name: 'Drake'},
        {name: 'Lil Wayne'},
        {name: 'Nicki Minaj'},
        {name: 'Kendrick Lamar'}
      ]);
    });
};
