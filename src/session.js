"use strict";
exports.__esModule = true;
exports.Session = void 0;
/* The Session class is a class that has a constructor that takes an object of type ISession and
assigns the properties of the object to the properties of the class. */
var Session = /** @class */ (function () {
    function Session(session) {
        this._id = session._id;
        this.startTime = session.startTime;
        this.endTime = session.endTime;
    }
    return Session;
}());
exports.Session = Session;
