exports.up = knex => {
  return knex.schema.createTable('artists', table => {
    table.increments();
    table.string('name');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('artists');
};
