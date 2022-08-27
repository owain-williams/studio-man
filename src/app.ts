require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

/* Connect to MongoDB Atlas instance. For users that cannot connect to the Production DB, they can run a development instance. */
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/studio_man_app'
mongoose.connect(mongoURI)

// Configure Express
const app = express()
app.use(bodyParser({ urlEncoded: true }))
app.set('view engine', 'ejs')

// Import custom classes
import { IBooking, Booking } from "./booking"
import { IAsset, Asset } from "./asset"
import { IClient, Client } from "./client"
import { IEngineer, Engineer } from "./engineer"
import { IRoom, Room } from "./room"
import { ISession, Session } from "./session"
import { IStudio, Studio } from "./studio"




const port = process.env.PORT || 3000






app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})