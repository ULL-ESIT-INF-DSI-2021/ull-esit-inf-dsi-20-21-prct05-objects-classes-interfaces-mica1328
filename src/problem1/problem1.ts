/**
 * Ejercicio 1 - Pokedex
 * 
 * @author Micaela Lucia Mungay Juncal
 * 
 */

import { Pokemon } from './problem1-1';

let ninetales = new Pokemon("ninetales", 19.9, 1.1, "fuego", 76, 75, 100, 73);
let leafeon = new Pokemon("leafeon", 25.5, 1.0, "hierba", 110, 130, 95, 65);

/**  @class clase en la cual se simula el cambate entre ambos pokemons hasta que solo quede uno */
export class Combat{

  /** @param rival1 contringante 1*/
    private rival1: Pokemon;
  /** @param rival2 contringante 1*/
    private rival2: Pokemon;

    constructor(rival1: Pokemon, rival2: Pokemon){
        this.rival1 = ninetales;
        this.rival2 = leafeon;
    }

/** @function fight Aqui simulamos la pelea entre los rivales  */

    fight() {

    let damage1 = 0;
    let damage2 = 0;

    while(damage1 <= this.rival1.hp || damage2 <= this.rival2.hp){

    let efective = 1;
    
    if (this.rival1.type_ == this.rival2.type_){
      efective = 0.5;
    }
    else if (this.rival1.type_ != this.rival2.type_){
      if(this.rival1.type_ == "fuego") {
        if(this.rival2.type_ == "hierba"){
          efective = 2;
        }
        else if (this.rival2.type_ == "agua"){
          efective = 0.5;
        }
        else if(this.rival2.type_ = "electrico"){
          efective = 1;
        }
      }
      else if (this.rival1.type_ == "hierba"){
        if(this.rival2.type_ == "fuego"){
          efective = 0.5;
        }
        else if(this.rival2.type_ == "agua"){
          efective = 2;
        }
        else if (this.rival2.type_ == "electrico"){
          efective = 1;
        }
      }
      else if (this.rival1.type_ == "agua"){
        if (this.rival2.type_ == "fuego"){
          efective = 2;
        }
        else if (this.rival2.type_ == "hiebva"){
          efective = 0.5;
        }
        else if (this.rival2.type_ == "electrico"){
          efective = 0.5;
        }
      }
      else if (this.rival1.type_ == "electrico"){
        if (this.rival2.type_ == "fuego"){
          efective = 1;
        }
        else if (this.rival2.type_ == "agua"){
          efective = 2;
        }
        else if(this.rival2.type_ == "hierba"){
          efective = 1;
        }
      }
    }

    if (this.rival1.type_ == this.rival2.type_){
      efective = 0.5;
    }
    else if (this.rival2.type_ != this.rival1.type_){
      if(this.rival2.type_ == "fuego") {
        if(this.rival1.type_ == "hierba"){
          efective = 2;
        }
        else if (this.rival1.type_ == "agua"){
          efective = 0.5;
        }
        else if(this.rival1.type_ = "electrico"){
          efective = 1;
        }
      }
      else if (this.rival2.type_ == "hierba"){
        if(this.rival1.type_ == "fuego"){
          efective = 0.5;
        }
        else if(this.rival1.type_ == "agua"){
          efective = 2;
        }
        else if (this.rival1.type_ == "electrico"){
          efective = 1;
        }
      }
      else if (this.rival2.type_ == "agua"){
        if (this.rival1.type_ == "fuego"){
          efective = 2;
        }
        else if (this.rival1.type_ == "hiebva"){
          efective = 0.5;
        }
        else if (this.rival1.type_ == "electrico"){
          efective = 0.5;
        }
      }
      else if (this.rival2.type_ == "electrico"){
        if (this.rival1.type_ == "fuego"){
          efective = 1;
        }
        else if (this.rival1.type_ == "agua"){
          efective = 2;
        }
        else if(this.rival1.type_ == "hierba"){
          efective = 1;
        }
      }
    }
    
    damage1 = 50 * (this.rival1.attack / this.rival2.defense) * efective;
    damage2 = 50 * (this.rival2.attack / this.rival1.defense) * efective;
    this.rival1.hp = this.rival1.hp - damage1;
    this.rival2.hp = this.rival2.hp - damage2;
    }

    if(this.rival1.hp < this.rival2.hp){
        let aux1 = this.rival2.name;
/**  @returns se retorna el nombre del pokemon el cual ha quedado con "vida" */
        return (aux1);
    }
    else{
        let aux2 = this.rival1.name;
/**  @returns se retorna el nombre del pokemon el cual ha quedado con "vida" */
        return(aux2);
    }
    
    }
}


let myPokemon = new Combat(ninetales, leafeon);
let winner = myPokemon.fight();

console.log("El ganador es: ", winner);