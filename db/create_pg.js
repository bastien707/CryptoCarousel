const dotenv = require('dotenv')
dotenv.config()

const knexParams = require('./knex')
const knex = require('knex')(knexParams[process.env.NODE_ENV])

async function create_assets() {
    knex.schema.hasTable('cc_assets')
    .then(function (exists) {
        if(!exists){
            return knex.schema.createTable('cc_assets', (table) => {
                table.string('id').primary(), 
                table.integer('rank'),
                table.string('symbol'),
                table.string('name'),
                table.string('supply'),
                table.string('maxsupply'),
                table.string('marketcapusd'),
                table.string('volumeusd24h'),
                table.string('priceusd'),
                table.string('changepc24h'),
                table.string('vwap24h')
            })
            .then()
            .catch(error => console.log(error))
        }
    })
}

module.exports = {
    create_assets
}