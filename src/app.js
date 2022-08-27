"use strict";
exports.__esModule = true;
require('dotenv').config();
// console.log(process.env)
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
/* Connect to MongoDB Atlas instance. For users that cannot connect to the Production DB, they can run a development instance. */
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/studio_man_app';
mongoose.connect(mongoURI);
// Configure Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, "..", 'views'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('pages/index');
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
