const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express()

const port = process.env.PORT || 3000;

const pg_updater = require('./db/update_pg')
const pg_creater = require('./db/create_pg')

const dev_ws = require('./modules/query')

pg_updater.update_assets_price()

setInterval(async () => {
    // update DB on each call
    await pg_creater.create_assets()
    await pg_updater.update_assets()
}, 10*1000)

app.get('/', (req, res) => {
    // main menu containing the most relevant informations about the actual state of the blockchain
    res.send()
})

app.get('/card/:crypto', (req, res) => {
    // send a card with the informations of a cryptocurrency
    res.send()
})

app.get('/dev/:val', (req, res) =>{
    // development endpoint
    res.send()
})

// go to localhost:3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})