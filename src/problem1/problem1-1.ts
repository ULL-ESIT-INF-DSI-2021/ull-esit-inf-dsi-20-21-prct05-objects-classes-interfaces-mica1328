/**
 * Ejercicio 1 - Pokedex (clase aparte de pokemon)
 * 
 * Aqui simplemente vamos a tener la informacion de cada pokemon
 * @param name El nombre del pokemon
 * @param weight Peso del pokemon
 * @param height Altura del pokemon
 * @param type_ Tipo del pokemon, si se trata de hierba, agua, fuego o electricidad
 * @param attack Los puntos de ataque del pokemon
 * @param defense Los puntos de defensa del pokemon
 * @param speed Los puntos de velocidad del pokemon
 * @param hp La vida del pokemon
 * 
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