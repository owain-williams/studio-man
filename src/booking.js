"use strict";
exports.__esModule = true;
exports.Booking = void 0;
/* The Booking class is a class that has a constructor that takes an IBooking object and assigns the
values of the IBooking object to the Booking class's properties. */
var Booking = /** @class */ (function () {
    function Booking(booking) {
        this._id = booking._id;
        this.clientID = booking.clientID;
        this.roomID = booking.roomID;
        this.engineerIDs = booking.engineerIDs;
        this.sessions = booking.sessions;
        this.initialPrice = booking.initialPrice;
        this.finalPrice = booking.finalPrice;
        this.discount = booking.discount;
        this.notes = booking.notes;
    }
    return Booking;
}());
exports.Booking = Booking;
