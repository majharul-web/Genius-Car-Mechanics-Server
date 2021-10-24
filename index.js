const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
require('dotenv').config()

const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6soco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('database connected');
    }
    finally {

    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running Genius Server!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})