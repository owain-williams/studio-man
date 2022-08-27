interface IEngineer {
    name: string;
    firstName: string;
    lastName: string;
    rate:number;
    email?: string;
    phone?: string;
}

class Engineer {
    name: string;
    firstName: string;
    lastName: string;
    rate:number;
    email?: string;
    phone?: string;
    constructor(engineer: IEngineer) {
        this.name = engineer.name;
        this.firstName = engineer.firstName;
        this.lastName = engineer.lastName;
        this.rate = engineer.rate;
        this.email = engineer.email;
        this.phone = engineer.phone;
    }
}

export {IEngineer, Engineer};