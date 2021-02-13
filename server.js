const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => {
    app.post('/notes', (req, res) => {
        res.send('AAAAAAAAAEEEEEEEEEEEEEEEEEE');
    })
})
