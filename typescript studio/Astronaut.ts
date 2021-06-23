import {Payload} from './Payload';
// interface Payload {
//     masskg: number;
//     name: string;
// }

export class Astronaut implements Payload{
    massKg: number;
    name: string;
    constructor(masskg: number, name: string){
        this.massKg = masskg;
        this.name = name;
    }
}