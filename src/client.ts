interface IClient {
    _id: bigint;
    firstName: string;
    lastName?: string;
}

class Client {
    _id: bigint;
    firstName: string;
    lastName?: string;
    name: string;
    constructor(client: IClient) {
        this._id = client._id;
        this.firstName = client.firstName;
        this.lastName = client.lastName;
        this.name = client.firstName + " " + client.lastName;
    }
}

export {IClient, Client};