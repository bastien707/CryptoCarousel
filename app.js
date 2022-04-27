const express = require('express');
const path = require('path')
const port = 3000;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views/index.pug'));
})

// go to localhost:3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})