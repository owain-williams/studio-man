import { IAsset } from './asset';

interface IRoom {
    name: string;
    assets?: string[];
    rate?: number;
}

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