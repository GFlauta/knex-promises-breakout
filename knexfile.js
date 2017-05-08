module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sql_music'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
