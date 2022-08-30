const mongoose = require("mongoose")
 
// Mongoose Schemas

/* Creating a schema for the booking model. */
const bookingSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    clientID: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    roomID: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    engineerIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Engineer' }],
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
    initialPrice: Number,
    finalPrice: Number,
    discount: Number,
    notes: String
})
const bookingModel = mongoose.model('Booking', bookingSchema)

/* Creating a schema for the asset model. */
const assetSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String
})
const assetModel = mongoose.model('Asset', assetSchema)


/* Creating a schema for the client model. */
const clientSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String
})
const clientModel = mongoose.model('Client', clientSchema)

/* Creating a schema for the engineer model. */
const engineerSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    rate: Number,
    email: String,
    phone: String
})
const engineerModel = mongoose.model('Engineer', engineerSchema)

/* Creating a schema for the room model. */
const roomSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
    rate: Number
})
const roomModel = mongoose.model('Room', roomSchema)

/* Creating a schema for the session model. */
const sessionSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    startTime: Date,
    endTime: Date,
    hours: Number,
})
const sessionModel = mongoose.model('Session', sessionSchema)

/* Creating a schema for the studio model. */
const studioSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    authID: String,
    name: { type: String, required: true },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    engineers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Engineer' }],
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
    logoURL: String
})
const studioModel = mongoose.model('Studio', studioSchema)

/* Exporting the schemas and models. */
export { bookingSchema, bookingModel, 
    assetSchema, assetModel, 
    clientSchema, clientModel, 
    engineerSchema, engineerModel, 
    roomSchema, roomModel, 
    sessionSchema, sessionModel, 
    studioSchema, studioModel }