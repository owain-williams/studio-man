"use strict";
exports.__esModule = true;
exports.Room = void 0;
/* The Room class is a class that has a name, assets, and rate, and it takes in an object that has a
name, assets, and rate. */
var Room = /** @class */ (function () {
    function Room(room) {
        this.name = room.name;
        this.assets = room.assets;
        this.rate = room.rate;
    }
    return Room;
}());
exports.Room = Room;
