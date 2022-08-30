import { IAsset } from './asset';

/* Creating an interface that has a name, assets, and rate. */
interface IRoom {
    name: string;
    assets?: string[];
    rate?: number;
}

/* The Room class is a class that has a name, assets, and rate, and it takes in an object that has a
name, assets, and rate. */
class Room {
    name: string;
    assets?: string[];
    rate?: number;
    constructor(room: IRoom) {
        this.name = room.name;
        this.assets = room.assets;
        this.rate = room.rate;
    }
}

export {IRoom, Room};