// Update with your config settings.

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user:     DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      charset: 'utf8'
    }
};