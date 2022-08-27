interface IStudio {
    _id: bigint;
    authID: string;
    studioName: string;
    roomIDs?: string[];
    engineerIDs?: string[];
    assetIDs?: string[];
    logoURL?: string;
}

class Studio {
    _id: bigint;
    authID: string;
    studioName: string;
    roomIDs?: string[];
    engineerIDs?: string[];
    assetIDs?: string[];
    logoURL?: string;
    constructor(studio: IStudio) {
        this._id = studio._id;
        this.authID = studio.authID;
        this.studioName = studio.studioName;
        this.roomIDs = studio.roomIDs;
        this.engineerIDs = studio.engineerIDs;
        this.assetIDs = studio.assetIDs;
        this.logoURL = studio.logoURL;
    }
}

export {IStudio, Studio};