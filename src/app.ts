require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

/* Connect to MongoDB Atlas instance. For users that cannot connect to the Production DB, they can run a development instance. */
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/studio_man_app'
mongoose.connect(mongoURI)

const port = process.env.PORT || 3000

const app = express()
app.use(bodyParser({ urlEncoded: true }))
app.set('view engine', 'ejs')




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})