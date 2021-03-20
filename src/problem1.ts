class Pokemon{
//jnejfnlinflenali
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

let ninetales = new Pokemon("ninetales", 19.9, 1.1, "fuego", 76, 75, 100, 73);
let leafeon = new Pokemon("leafeon", 25.5, 1.0, "hierba", 110, 130, 95, 65);


class Combat{

    private rival1: Pokemon;
    private rival2: Pokemon;

    constructor(rival1: Pokemon, rival2: Pokemon){
        this.rival1 = ninetales;
        this.rival2 = leafeon;
    }

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
        return (aux1);
    }
    else{
        let aux2 = this.rival1.name;
        return(aux2);
    }
    
    }
}


let myPokemon = new Combat(ninetales, leafeon);
let winner = myPokemon.fight();

console.log("El ganador es: ", winner);