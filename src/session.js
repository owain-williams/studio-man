"use strict";
exports.__esModule = true;
exports.Session = void 0;
var Session = /** @class */ (function () {
    function Session(session) {
        this._id = session._id;
        this.startTime = session.startTime;
        this.endTime = session.endTime;
    }
    return Session;
}());
exports.Session = Session;
