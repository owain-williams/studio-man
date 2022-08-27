"use strict";
exports.__esModule = true;
exports.Studio = void 0;
var Studio = /** @class */ (function () {
    function Studio(studio) {
        this._id = studio._id;
        this.authID = studio.authID;
        this.studioName = studio.studioName;
        this.roomIDs = studio.roomIDs;
        this.engineerIDs = studio.engineerIDs;
        this.assetIDs = studio.assetIDs;
        this.logoURL = studio.logoURL;
    }
    return Studio;
}());
exports.Studio = Studio;
