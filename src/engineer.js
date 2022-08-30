"use strict";
exports.__esModule = true;
exports.Engineer = void 0;
/* The class Engineer is a class that has a constructor that takes an object of type IEngineer and
assigns the values of the properties of the object to the properties of the class. */
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
