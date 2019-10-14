export class RSVP {
    constructor(
        public id: number,
        public createdDate: Date,
        public email: string,
        public password: string,
        public name: string,
        public gender: string,
        public dob: Date,
        public address: string,
        public country: string,
        public contact: string
    ){
    }
}