import { IRoom, Room } from './room';
import { IAsset, Asset } from './asset';
import { IEngineer, Engineer } from './engineer';

interface IStudio {
    _id: bigint;
    authID: string;
    studioName: string;
    rooms?: IRoom[];
    engineers?: IEngineer[];
    assets?: IAsset[];
    logoURL?: string;
}

class Studio {
    _id: bigint
    authID: string;
    studioName: string;
    rooms: IRoom[];
    engineers: IEngineer[];
    assets: IAsset[];
    logoURL: string;
    constructor(studio: IStudio) {
        this.authID = studio.authID;
        this.studioName = studio.studioName;
        this.rooms = studio.rooms;
        this.engineers = studio.engineers;
        this.assets = studio.assets;
        this.logoURL = studio.logoURL;
    }
}

export {IStudio, Studio};