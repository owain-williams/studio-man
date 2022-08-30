"use strict";
exports.__esModule = true;
exports.Studio = void 0;
/* The Studio class is a class that has a constructor that takes an object of type IStudio and assigns
the properties of the IStudio object to the properties of the Studio class. */
var Studio = /** @class */ (function () {
    function Studio(studio) {
        // this._id = studio._id;
        this.authID = studio.authID;
        this.name = studio.name;
        this.roomIDs = studio.roomIDs;
        this.engineerIDs = studio.engineerIDs;
        this.assetIDs = studio.assetIDs;
        this.logoURL = studio.logoURL;
    }
    return Studio;
}());
exports.Studio = Studio;
