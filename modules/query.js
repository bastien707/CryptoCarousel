const WebSocket = require('ws')

const webPrice = new WebSocket("wss://ws.coincap.io/trades/binance")

exports.getBitcoinPrice = () => {
    webPrice.onmessage = function (msg){
        console.log(msg.data)
    }
}