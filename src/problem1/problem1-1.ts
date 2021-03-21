/**
 * Ejercicio 1 - Pokedex (clase aparte de pokemon)
 */

export class Pokemon{

    public name: string;
    public weight: number;
    public height: number;
    public type_: string;
    public attack: number;
    public defense: number;
    public speed: number; 
    public hp: number;

    constructor(name: string, weight: number, height: number, type_: string, attack: number, defense: number, speed: number, hp: number){
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type_ = type_;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.hp = hp;
    }

}