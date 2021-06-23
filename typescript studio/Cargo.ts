import {Payload} from './Payload';
// interface Payload {
//     masskg: number;
//     material: string;
// }
export class Cargo implements Payload{
    massKg: number;
    material: string;
    constructor(masskg: number, material: string){
        this.massKg = masskg;
        this.material = material;
    }
}