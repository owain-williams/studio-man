/* An interface that defines the properties of the Booking class. */
interface IBooking {
    _id: bigint;
    clientID: string;
    roomID: string;
    engineerIDs?: string[];
    sessions: string[];
    initialPrice: number;
    finalPrice?: number;
    discount?: number;
    notes?: string;
}

/* The Booking class is a class that has a constructor that takes an IBooking object and assigns the
values of the IBooking object to the Booking class's properties. */
class Booking {
    _id: bigint;
    clientID: string;
    roomID: string;
    engineerIDs?: string[];
    sessions: string[];
    initialPrice: number;
    finalPrice?: number;
    discount?: number;
    notes?: string;
    constructor(booking: IBooking) {
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
}

export {IBooking, Booking};