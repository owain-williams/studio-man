"use strict";
exports.__esModule = true;
exports.Engineer = void 0;
var Engineer = /** @class */ (function () {
    function Engineer(engineer) {
        this.name = engineer.firstName + " " + engineer.lastName;
        this.firstName = engineer.firstName;
        this.lastName = engineer.lastName;
        this.rate = engineer.rate;
        this.email = engineer.email;
        this.phone = engineer.phone;
    }
    return Engineer;
}());
exports.Engineer = Engineer;
