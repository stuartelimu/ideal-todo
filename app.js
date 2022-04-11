const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.json({'message': 'Hello world!'});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});