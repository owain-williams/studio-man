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
var schemas_1 = require("./schemas");
app.get("/api", function (req, res) {
    res.json({ message: "Hello from Express!" });
});
app.route("/api/studios")
    .get(function (req, res) {
    schemas_1.studioModel.find(function (err, studios) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(studios);
        }
    }).sort({ studioName: 1 });
}).post(function (req, res) {
    var newStudio = new schemas_1.studioModel(req.body);
    newStudio.save(function (err, savedStudio) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(savedStudio);
        }
    }).sort({ studioName: 1 });
})["delete"](function (req, res) {
    schemas_1.studioModel.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ message: "All studios deleted!" });
        }
    }).sort({ studioName: 1 });
}).put(function (req, res) {
    schemas_1.studioModel.updateMany({}, { $set: { studioName: req.body.studioName } }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ message: "All studios updated!" });
        }
    }).sort({ studioName: 1 });
}).patch(function (req, res) {
    schemas_1.studioModel.updateMany({}, { $set: { studioName: req.body.studioName } }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ message: "All studios updated!" });
        }
    }).sort({ studioName: 1 });
});
app.route("/api/studios/:studioID")
    .get(function (req, res) {
    schemas_1.studioModel.findById(req.params.studioID, function (err, studio) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(studio);
        }
    }).sort({ studioName: 1 });
}).post(function (req, res) {
    var newStudio = new schemas_1.studioModel(req.body);
    newStudio.save(function (err, savedStudio) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(savedStudio);
        }
    }).sort({ studioName: 1 });
})["delete"](function (req, res) {
    schemas_1.studioModel.deleteOne({ _id: req.params.studioID }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ message: "Studio deleted!" });
        }
    }).sort({ studioName: 1 });
}).put(function (req, res) {
    schemas_1.studioModel.updateOne({ _id: req.params.studioID }, { $set: { studioName: req.body.studioName } }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ message: "Studio updated!" });
        }
    }).sort({ studioName: 1 });
}).patch(function (req, res) {
    schemas_1.studioModel.updateOne({ _id: req.params.studioID }, { $set: { studioName: req.body.studioName } }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ message: "Studio updated!" });
        }
    }).sort({ studioName: 1 });
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
