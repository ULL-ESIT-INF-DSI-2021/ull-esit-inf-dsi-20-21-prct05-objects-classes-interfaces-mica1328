import 'mocha';
import {expect} from 'chai';
import {Movable} from '../src/problem3/problem3';
import {Street} from '../src/problem3/problem3';



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


describe('Nueva calle: Castillo', () => {
    it('Contamos las motos que hay', () =>{
        expect(new Street(120, "camion",vehiculo).countBike()).to.be.equal(2);
    });
});

describe('Nueva calle: Castillo', () => {
    it('Contamos las bicicletas que hay', () =>{
        expect(new Street(120, "camion",vehiculo).countBici()).to.be.equal(1);
    });
});

describe('Nueva calle: Castillo', () => {
    it('Contamos las guaguas que hay', () =>{
        expect(new Street(120, "camion",vehiculo).countBus()).to.be.equal(1);
    });
});

describe('Nueva calle: Castillo', () => {
    it('Contamos los coches que hay', () =>{
        expect(new Street(120, "camion",vehiculo).countCar()).to.be.equal(2);
    });
});

describe('Nueva calle: Castillo', () => {
    it('Contamos los patines que hay', () =>{
        expect(new Street(120, "camion",vehiculo).countSco()).to.be.equal(1);
    });
});

describe('Nueva calle: Castillo', () => {
    it('Contamos los trenes que hay', () =>{
        expect(new Street(120, "camion",vehiculo).countTrain()).to.be.equal(1);
    });
});