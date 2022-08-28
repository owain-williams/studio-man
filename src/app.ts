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

app.get('/', (req, res) => {
    res.render('pages/index')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})