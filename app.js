const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// import mongoose module
const mongoose = require('mongoose');

const todoRouter = require('./routes/todo');

// setup mongoose connection
const mongoDB = 'mongodb://localhost:27017/ideal_todo'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

// get default connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', todoRouter);


app.get('/', (req,res) => {
    res.json({'message': 'Hello world!'});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});