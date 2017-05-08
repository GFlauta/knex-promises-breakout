exports.up = knex => {
  return knex.schema.createTable('songs', table => {
    table.increments();
    table.string('name');
    table.boolean('explicit_lyrics');
    table.integer('album_id').references('albums.id');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('songs');
};
