class Hero{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    attack(){
        if (this.job == "Guerreiro"){
          return console.log(`O ${this.job} attaca com espada`);
        }
        if (this.job == "Mago"){
          return console.log(`O ${this.job} attack com magia`);
        }
        if (this.job == "Monge"){
            return console.log(`O ${this.job} attack com artes marciais`);
          }
        if (this.job == "Ninja"){
          return console.log(`O ${this.job} attack com shuriken`);
        }
    }
}

const Hero1 = new Hero("John", 35, "Guerreiro");
const Hero2 = new Hero("Gandalf", 500, "Mago");
const Hero3 = new Hero("Ryu", 40, "Monge")
const Hero4 = new Hero("Naruto", 19, "Ninja")


Hero1.attack()
Hero2.attack()
Hero3.attack()
Hero4.attack()