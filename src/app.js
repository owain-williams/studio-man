"use strict";
exports.__esModule = true;
require('dotenv').config();
// console.log(process.env)
var express = require('express');
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
app.get("/api", function (req, res) {
    res.json({ message: "Hello from Express!" });
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
