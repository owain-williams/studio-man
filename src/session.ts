/* Defining an interface that is used to define the properties of the class. */
interface ISession {
    _id: bigint;
    startTime: Date;
    endTime: Date;
    hours?: number;
}

/* The Session class is a class that has a constructor that takes an object of type ISession and
assigns the properties of the object to the properties of the class. */
class Session {
    _id: bigint;
    startTime: Date;
    endTime: Date;
    hours?: number;
    constructor(session: ISession) {
        this._id = session._id;
        this.startTime = session.startTime;
        this.endTime = session.endTime;
    }
}

export {ISession, Session};