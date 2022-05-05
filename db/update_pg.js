const dotenv = require('dotenv')
dotenv.config()

const fetch = require('node-fetch')

const knexParams = require('./knexfile')
const knex = require('knex')(knexParams[process.env.NODE_ENV])

const WebSocket = require('ws')
const webPrice = new WebSocket("wss://ws.coincap.io/prices?assets=ALL")

async function update_assets() {
    await fetch(process.env.API_ADDRESS + 'assets/')
    .then(response => response.json())
    .then(json => {
        for(a in json.data){
            knex('cc_assets')
            .insert({
                id: json.data[a].id,
                rank: json.data[a].rank,
                symbol: json.data[a].symbol,
                name: json.data[a].name,
                supply: json.data[a].supply,
                maxsupply: json.data[a].maxSupply,
                marketcapusd: json.data[a].marketCapUsd,
                volumeusd24h: json.data[a].volumeUsd24Hr,
                priceusd: json.data[a].priceUsd,
                changepc24h: json.data[a].changePercent24Hr,
                vwap24h: json.data[a].vwap24Hr
            })
            .onConflict('id')
            .merge()
            .then()
            .catch(error => console.log(error))
        }
    })
    .catch(error =>{
        console.log(error)
    })
} 

async function update_assets_price() {
    webPrice.onmessage = function (json){
        const parsed = JSON.parse(json.data)
        for(a in Object.keys(parsed)){
            knex('cc_assets')
            .update({
                priceusd: Object.values(parsed)[a]
            })
            .where({ id : Object.keys(parsed)[a]})
            .then()
            .catch(error => console.log(error))
        }
    }
}

module.exports = {
    update_assets,
    update_assets_price
}
