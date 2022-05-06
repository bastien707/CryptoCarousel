

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: "postgresql://pi:route123@localhost:5432/pi"
  }
};
