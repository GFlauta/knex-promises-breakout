
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {name: 'Poetic Justice', explicit_lyrics: true, album_id: knex('albums').where('name', 'Good Kid, M.A.A.D. City').select('id')},
        {name: 'Moment 4 Life', explicit_lyrics: true, album_id: knex('albums').where('name', 'Pink Friday').select('id')},
        {name: 'Believe Me', explicit_lyrics: true, album_id: knex('albums').where('name', 'Tha Carter V').select('id')},
        {name: 'Buried Alive', explicit_lyrics: true, album_id: knex('albums').where('name', 'Take Care').select('id')}
      ]);
    });
};
