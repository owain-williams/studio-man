interface IEngineer {
    _id: bigint;
    firstName: string;
    lastName?: string;
    rate?:number;
    email?: string;
    phone?: string;
}

class Engineer {
    _id: bigint;
    name?: string;
    firstName: string;
    lastName?: string;
    rate?:number;
    email?: string;
    phone?: string;
    constructor(engineer: IEngineer) {
        this.name = engineer.firstName + " " + engineer.lastName;
        this.firstName = engineer.firstName;
        this.lastName = engineer.lastName;
        this.rate = engineer.rate;
        this.email = engineer.email;
        this.phone = engineer.phone;
    }
}

export {IEngineer, Engineer};