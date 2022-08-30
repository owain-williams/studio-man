/* Defining the interface for the class Asset. */
interface IAsset {
    name: string;
}

/* The class Asset has a constructor that takes an object of type IAsset and assigns the name property
of the object to the name property of the class. */
class Asset {
    name: string;
    constructor(asset: IAsset) {
        this.name = asset.name;
    }
}

export {IAsset, Asset};