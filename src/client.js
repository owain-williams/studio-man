"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(client) {
        this._id = client._id;
        this.firstName = client.firstName;
        this.lastName = client.lastName;
        this.name = client.firstName + " " + client.lastName;
    }
    return Client;
}());
exports.Client = Client;
