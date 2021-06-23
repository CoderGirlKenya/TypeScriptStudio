

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: string[];
    astronauts: string[];
    constructor(name: string, totalCapacityKg: number){
            this.name = name;
            this.totalCapacityKg = totalCapacityKg;
        function sumMass( items: Payload[] ): number{
            let totalMass: number = 0;
            for(let index =0; index < items.length; index++){
                totalMass += items[index].masskg;
            }
            return this.sumMass;
        }

            currentMassKg[]:number{
                return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
            }

            canAdd(item: Payload):boolean {
                return this.currentMassKg + this.cargoItems.massKg <=this.totalCapacityKg
            }


    };
}