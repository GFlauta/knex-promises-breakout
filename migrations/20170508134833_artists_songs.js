exports.up = knex => {
  return knex.schema.createTable('artists_songs', table => {
    table.integer('artist_id').references('artists.id');
    table.integer('song_id').references('songs.id');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('artists_songs');
};
