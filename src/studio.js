"use strict";
exports.__esModule = true;
exports.Studio = void 0;
var Studio = /** @class */ (function () {
    function Studio(studio) {
        this.authID = studio.authID;
        this.studioName = studio.studioName;
        this.rooms = studio.rooms;
        this.engineers = studio.engineers;
        this.assets = studio.assets;
        this.logoURL = studio.logoURL;
    }
    return Studio;
}());
exports.Studio = Studio;
