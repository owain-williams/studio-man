"use strict";
exports.__esModule = true;
exports.studioModel = exports.studioSchema = exports.sessionModel = exports.sessionSchema = exports.roomModel = exports.roomSchema = exports.engineerModel = exports.engineerSchema = exports.clientModel = exports.clientSchema = exports.assetModel = exports.assetSchema = exports.bookingModel = exports.bookingSchema = void 0;
var mongoose = require("mongoose");
// Mongoose Schemas
/* Creating a schema for the booking model. */
var bookingSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    clientID: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    roomID: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    engineerIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Engineer' }],
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
    initialPrice: Number,
    finalPrice: Number,
    discount: Number,
    notes: String
});
exports.bookingSchema = bookingSchema;
var bookingModel = mongoose.model('Booking', bookingSchema);
exports.bookingModel = bookingModel;
/* Creating a schema for the asset model. */
var assetSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String
});
exports.assetSchema = assetSchema;
var assetModel = mongoose.model('Asset', assetSchema);
exports.assetModel = assetModel;
/* Creating a schema for the client model. */
var clientSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String
});
exports.clientSchema = clientSchema;
var clientModel = mongoose.model('Client', clientSchema);
exports.clientModel = clientModel;
/* Creating a schema for the engineer model. */
var engineerSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    rate: Number,
    email: String,
    phone: String
});
exports.engineerSchema = engineerSchema;
var engineerModel = mongoose.model('Engineer', engineerSchema);
exports.engineerModel = engineerModel;
/* Creating a schema for the room model. */
var roomSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
    rate: Number
});
exports.roomSchema = roomSchema;
var roomModel = mongoose.model('Room', roomSchema);
exports.roomModel = roomModel;
/* Creating a schema for the session model. */
var sessionSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    startTime: Date,
    endTime: Date,
    hours: Number
});
exports.sessionSchema = sessionSchema;
var sessionModel = mongoose.model('Session', sessionSchema);
exports.sessionModel = sessionModel;
/* Creating a schema for the studio model. */
var studioSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    authID: String,
    name: { type: String, required: true },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    engineers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Engineer' }],
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
    logoURL: String
});
exports.studioSchema = studioSchema;
var studioModel = mongoose.model('Studio', studioSchema);
exports.studioModel = studioModel;
