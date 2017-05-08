exports.up = knex => {
  return knex.schema.createTable('albums_artists', table => {
    table.integer('album_id').references('albums.id');
    table.integer('artist_id').references('artists.id');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('albums_artists');
};
