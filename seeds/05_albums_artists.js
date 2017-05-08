
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums_artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums_artists').insert([
        {album_id: knex('albums').where('name', 'Good Kid, M.A.A.D. City').select('id'), artist_id: knex('artists').where('name', 'Kendrick Lamar').select('id')},
        {album_id: knex('albums').where('name', 'Good Kid, M.A.A.D. City').select('id'), artist_id: knex('artists').where('name', 'Drake').select('id')},
        {album_id: knex('albums').where('name', 'Pink Friday').select('id'), artist_id: knex('artists').where('name', 'Nicki Minaj').select('id')},
        {album_id: knex('albums').where('name', 'Pink Friday').select('id'), artist_id: knex('artists').where('name', 'Drake').select('id')},
        {album_id: knex('albums').where('name', 'Tha Carter V').select('id'), artist_id: knex('artists').where('name', 'Lil Wayne').select('id')},
        {album_id: knex('albums').where('name', 'Tha Carter V').select('id'), artist_id: knex('artists').where('name', 'Drake').select('id')},
        {album_id: knex('albums').where('name', 'Take Care').select('id'), artist_id: knex('artists').where('name', 'Drake').select('id')},
        {album_id: knex('albums').where('name', 'Take Care').select('id'), artist_id: knex('artists').where('name', 'Kendrick Lamar').select('id')}
      ]);
    });
};
