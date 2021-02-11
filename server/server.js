const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');

// Create the Express application:
const app = express();

// Attach middleware:
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../react-ui/build')));

app.use('/api', routes);

module.exports = app;
