import {Payload} from './Payload';

class Astronaut implements Payload{
    massKg: number;
    name: string;
    constructor(masskg: number, name: string){
        this.massKg = masskg;
        this.name = name;
    }
}