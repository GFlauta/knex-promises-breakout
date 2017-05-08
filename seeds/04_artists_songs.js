
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists_songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists_songs').insert([
        {artist_id: knex('artists').where('name', 'Kendrick Lamar').select('id'), song_id: knex('songs').where('name', 'Poetic Justice').select('id')},
        {artist_id: knex('artists').where('name', 'Drake').select('id'), song_id: knex('songs').where('name', 'Poetic Justice').select('id')},
        {artist_id: knex('artists').where('name', 'Nicki Minaj').select('id'), song_id: knex('songs').where('name', 'Moment 4 Life').select('id')},
        {artist_id: knex('artists').where('name', 'Drake').select('id'), song_id: knex('songs').where('name', 'Moment 4 Life').select('id')},
        {artist_id: knex('artists').where('name', 'Lil Wayne').select('id'), song_id: knex('songs').where('name', 'Believe Me').select('id')},
        {artist_id: knex('artists').where('name', 'Drake').select('id'), song_id: knex('songs').where('name', 'Believe Me').select('id')},
        {artist_id: knex('artists').where('name', 'Drake').select('id'), song_id: knex('songs').where('name', 'Buried Alive').select('id')},
        {artist_id: knex('artists').where('name', 'Kendrick Lamar').select('id'), song_id: knex('songs').where('name', 'Buried Alive').select('id')}
      ]);
    });
};
