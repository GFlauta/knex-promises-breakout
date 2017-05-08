
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        {name: 'Good Kid, M.A.A.D. City', genre: 'Hip Hop'},
        {name: 'Pink Friday', genre: 'Hip Hop'},
        {name: 'Tha Carter V', genre: 'Hip Hop'},
        {name: 'Take Care', genre: 'Hip Hop'}
      ]);
    });
};
