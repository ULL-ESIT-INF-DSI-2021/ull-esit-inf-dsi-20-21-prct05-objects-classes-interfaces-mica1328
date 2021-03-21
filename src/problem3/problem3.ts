/**
 * Ejercicio 3 - Medios de transporte
 */

 export interface Movable {
    speed: number;
    type_: string;
}

export class Street implements Movable{

    public transport: Movable[];
    public maxSpeed: number;
    public noType: string;
    
    constructor(public speed: number, public type_: string, transport: Movable[]){
        this.transport = [];
        this.maxSpeed = speed;
        this.noType = type_;
        this.transport = transport;
        for(let i = 0; i < transport.length; i++){
            if(this.transport[i].speed > this.speed || this.transport[i].type_ == this.noType){
                this.transport.splice(i, 1);
            }                
        }
    }

    back(){
        let permited: Movable[] = this.transport.sort((n1,n2) => n1.speed - n2.speed);
        
        return [permited];
    }

    countCar(){
        let howManyCar: number = 0;
        for(let i = 0; i < this.transport.length; i++){
            if(this.transport[i].type_ == "coche"){
                howManyCar++
            }
        }
        return howManyCar;
    }

    countBus(){
        let howManyBus: number = 0;
        for(let i = 0; i < this.transport.length; i++){
            if(this.transport[i].type_ == "guagua"){
                howManyBus++
            }
        }
        return howManyBus;
    }

    countBici(){
        let howManyBici: number = 0;
        for(let i = 0; i < this.transport.length; i++){
            if(this.transport[i].type_ == "bicicleta"){
                howManyBici++
            }
        }
        return howManyBici;
    }

    countTrain(){
        let howManyTrain: number = 0;
        for(let i = 0; i < this.transport.length; i++){
            if(this.transport[i].type_ == "tren"){
                howManyTrain++
            }
        }
        return howManyTrain;
    }

    countBike(){
        let howManyBike: number = 0;
        for(let i = 0; i < this.transport.length; i++){
            if(this.transport[i].type_ == "moto"){
                howManyBike++
            }
        }
        return howManyBike;
    }

    countSco(){
        let howManySco: number = 0;
        for(let i = 0; i < this.transport.length; i++){
            if(this.transport[i].type_ == "patineta"){
                howManySco++
            }
        }
        return howManySco;
    }

    deleteVe(type_: string){

    for (let i = 0; i < this.transport.length; i++){
      if (this.transport[i].type_ == type_){
        this.transport.splice(i, 1);
      }
    }
  }
}

let c1: Movable = {speed: 90, type_:"coche"};
let c5: Movable = {speed: 80, type_:"coche"};
let c2: Movable = {speed: 50, type_:"guagua"};
let c3: Movable = {speed: 130, type_:"ferrari"};
let c4: Movable = {speed: 20, type_:"bicicleta"};
let c6: Movable = {speed: 10, type_:"patineta"};
let c7: Movable = {speed: 90, type_:"tren"};
let c8: Movable = {speed: 70, type_:"moto"};
let c9: Movable = {speed: 110, type_:"moto"};
let c10: Movable = {speed: 50, type_:"camion"};



let vehiculo: Movable[] = [c1, c2, c3, c4, c5, c9, c7, c8, c6, c10];


let Castillo = new Street(120, "camion",vehiculo);
let calle1 = Castillo.back();
let cars = Castillo.countCar();
let bus = Castillo.countBus();
let bicis = Castillo.countBici();
let motos = Castillo.countBike();
let trenes = Castillo.countTrain();
let patin = Castillo.countSco();

let out = Castillo.deleteVe("bicicleta");
let bicis2 = Castillo.countBici();

console.log("Hay estos vehiculos en la calle", calle1);
console.log("Hay ", cars, " coche/s en la calle");
console.log("Hay ", bus, " guagua/s en la calle");
console.log("Hay ", motos, " moto/s en la calle");
console.log("Hay ", trenes, " tren/es en la calle");
console.log("Hay ", patin, " patineta/s en la calle");
console.log("Hay ", bicis, " bicicleta/s en la calle");
console.log("Hay estos vehiculos en la calle", calle1);
console.log("Hay ", bicis2, " bicicleta/s en la calle");