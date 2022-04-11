const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// import mongoose module
const mongoose = require('mongoose');

// setup mongoose connection
const mongoDB = '127.0.0.1'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

// get default connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.json({'message': 'Hello world!'});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});