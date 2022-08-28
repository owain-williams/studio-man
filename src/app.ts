require('dotenv').config()
// console.log(process.env)
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

/* Connect to MongoDB Atlas instance. For users that cannot connect to the Production DB, they can run a development instance. */
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/studio_man_app'
mongoose.connect(mongoURI)

// Configure Express
const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static('public'))

// Import custom classes
import { IBooking, Booking } from "./booking"
import { IAsset, Asset } from "./asset"
import { IClient, Client } from "./client"
import { IEngineer, Engineer } from "./engineer"
import { IRoom, Room } from "./room"
import { ISession, Session } from "./session"
import { IStudio, Studio } from "./studio"

import {bookingSchema, bookingModel,
    assetSchema, assetModel,
    clientSchema, clientModel,
    engineerSchema, engineerModel,
    roomSchema, roomModel,
    sessionSchema, sessionModel,
    studioSchema, studioModel} from "./schemas"

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

app.route("/api/studios")
.get((req, res) => {
    studioModel.find((err, studios) => {
        if (err) {
            console.log(err)
        } else {
            res.json(studios)
        }
    }).sort({studioName: 1})
}).post((req, res) => {
    const newStudio = new studioModel(req.body)
    newStudio.save((err, savedStudio) => {
        if (err) {
            console.log(err)
        } else {
            res.json(savedStudio)
        }
    }).sort({studioName: 1})
}).delete((req, res) => {
    studioModel.deleteMany({}, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ message: "All studios deleted!" })
        }
    }).sort({studioName: 1})
}).put((req, res) => {
    studioModel.updateMany({}, { $set: { studioName: req.body.studioName } }, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ message: "All studios updated!" })
        }
    }).sort({studioName: 1})
}).patch((req, res) => {
    studioModel.updateMany({}, { $set: { studioName: req.body.studioName } }, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ message: "All studios updated!" })
        }
    }).sort({studioName: 1})
})

app.route("/api/studios/:studioID")
.get((req, res) => {
    studioModel.findById(req.params.studioID, (err, studio) => {
        if (err) {
            console.log(err)
        } else {
            res.json(studio)
        }
    }).sort({studioName: 1})
}).post((req, res) => {
    const newStudio = new studioModel(req.body)
    newStudio.save((err, savedStudio) => {
        if (err) {
            console.log(err)
        } else {
            res.json(savedStudio)
        }
    }).sort({studioName: 1})
}).delete((req, res) => {
    studioModel.deleteOne({_id: req.params.studioID}, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ message: "Studio deleted!" })
        }
    }).sort({studioName: 1})
}).put((req, res) => {
    studioModel.updateOne({_id: req.params.studioID}, { $set: { studioName: req.body.studioName } }, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ message: "Studio updated!" })
        }
    }).sort({studioName: 1})
}).patch((req, res) => {
    studioModel.updateOne({_id: req.params.studioID}, { $set: { studioName: req.body.studioName } }, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ message: "Studio updated!" })
        }
    }).sort({studioName: 1})
})


const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})