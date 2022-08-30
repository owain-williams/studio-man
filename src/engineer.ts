/* Defining an interface that has a property _id of type bigint, a property firstName of type string, a
property lastName of type string, a property rate of type number, a property email of type string,
and a property phone of type string. */
interface IEngineer {
    _id: bigint;
    firstName: string;
    lastName?: string;
    rate?:number;
    email?: string;
    phone?: string;
}

/* The class Engineer is a class that has a constructor that takes an object of type IEngineer and
assigns the values of the properties of the object to the properties of the class. */
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