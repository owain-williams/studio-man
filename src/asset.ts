interface IAsset {
    name: string;
}

class Asset {
    name: string;
    constructor(asset: IAsset) {
        this.name = asset.name;
    }
}

export {IAsset, Asset};