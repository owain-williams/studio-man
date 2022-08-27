"use strict";
exports.__esModule = true;
require('dotenv').config();
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
/* Connect to MongoDB Atlas instance. For users that cannot connect to the Production DB, they can run a development instance. */
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/studio_man_app';
mongoose.connect(mongoURI);
// Configure Express
var app = express();
app.use(bodyParser({ urlEncoded: true }));
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
