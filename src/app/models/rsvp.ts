import { Country } from './country';

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
        public country: Country,
        public contact: string
    ){
    }
}