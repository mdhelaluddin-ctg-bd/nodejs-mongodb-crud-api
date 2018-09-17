const express = require('express')
const product = require('./routes/product.route');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/product-db', {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Body Parser Initialization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/products', product);

app.listen(port, () => console.log(`Node.js and MongoDB CRUD app is listening on port ${port}!`))