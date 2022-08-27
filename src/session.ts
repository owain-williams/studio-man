interface ISession {
    _id: bigint;
    startTime: Date;
    endTime: Date;
    hours?: number;
}

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