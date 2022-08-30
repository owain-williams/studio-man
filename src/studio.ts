/* Defining an interface. */
interface IStudio {
    // _id?: bigint;
    authID?: string;
    name: string;
    roomIDs?: string[];
    engineerIDs?: string[];
    assetIDs?: string[];
    logoURL?: string;
}

/* The Studio class is a class that has a constructor that takes an object of type IStudio and assigns
the properties of the IStudio object to the properties of the Studio class. */
class Studio {
    // _id?: bigint;
    authID?: string;
    name: string;
    roomIDs?: string[];
    engineerIDs?: string[];
    assetIDs?: string[];
    logoURL?: string;
    constructor(studio: IStudio) {
        // this._id = studio._id;
        this.authID = studio.authID;
        this.name = studio.name;
        this.roomIDs = studio.roomIDs;
        this.engineerIDs = studio.engineerIDs;
        this.assetIDs = studio.assetIDs;
        this.logoURL = studio.logoURL;
    }
}

export {IStudio, Studio};