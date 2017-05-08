exports.up = knex => {
  return knex.schema.createTable('albums', table => {
    table.increments();
    table.string('name');
    table.string('genre');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('albums');
};
