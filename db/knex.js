const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_ADDRESS,
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
    pool: {min: 0, max: 18}
  }
};