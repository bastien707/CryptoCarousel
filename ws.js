const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const expressWs = require('express-ws')
const http = require('http')
const WebSocket = require('ws')
const knexParams = require('./db/knex')

const knex = require('knex')(knexParams[process.env.NODE_ENV])
const app = express()
const port = process.env.PORT_WS || 3000
const server = http.createServer(app)

expressWs(app, server)

app.ws('/ws', (ws, req) => {
    const cr = req.query.assets.split(",")
    ws.on('message', (message) => {
        if(message == 'start'){
            setInterval(() => {
                knex
                .from("cc_assets")
                .whereIn('id', cr)
                .then(res => {
                    ws.send(JSON.stringify(res, undefined, 2))
                })
                .catch((error) => {console.log(error)})
            }, 3000); 
        } else {
            ws.terminate()
        }
    })
    ws.on('error', (error) => {
        console.log(error)
    })
})

server.listen(port, () => {
    console.log(`Server started on port ${server.address().port} - WS`);
});