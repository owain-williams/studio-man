const mongoose = require("mongoose")

// 
// Mongoose Schemas
// 
const bookingSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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

// Assets
const assetSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
})
const assetModel = mongoose.model('Asset', assetSchema)

// Clients
const clientSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String
})
const clientModel = mongoose.model('Client', clientSchema)

// Engineers
const engineerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    rate: Number,
    email: String,
    phone: String
})
const engineerModel = mongoose.model('Engineer', engineerSchema)

// Rooms
const roomSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
    rate: Number
})
const roomModel = mongoose.model('Room', roomSchema)

// Sessions
const sessionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startTime: Date,
    endTime: Date,
    hours: Number,
})
const sessionModel = mongoose.model('Session', sessionSchema)

// Studios
const studioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    authID: String,
    studioName: String,
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    engineers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Engineer' }],
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
    logoURL: String
})
const studioModel = mongoose.model('Studio', studioSchema)

export { bookingSchema, bookingModel, 
    assetSchema, assetModel, 
    clientSchema, clientModel, 
    engineerSchema, engineerModel, 
    roomSchema, roomModel, 
    sessionSchema, sessionModel, 
    studioSchema, studioModel }