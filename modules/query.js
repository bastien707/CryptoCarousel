const WebSocket = require('ws')

const webPrice = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin")

exports.getBitcoinPrice = () => {
    webPrice.onmessage = function (msg){
        console.log(msg.data)
    }
} 

