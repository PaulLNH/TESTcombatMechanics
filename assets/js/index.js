class Entity {
  constructor(type, name, maxHealth, maxEndurance) {
    this.type = type;
    this.name = name;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.maxEndurance = maxEndurance;
    this.endurance = maxEndurance
  }
  getHealth() {
    console.log(`${this.name} has ${this.health} health.`);
    return this.health;
  }
  addHealth(amount) {
    this.health += amount;
    console.log(`${this.name} gains ${amount} health.`);
  }
  removeHealth(cost) {
    this.health -= cost;
    console.log(`${this.name} loses ${cost} health.`);
  }
  getEndurance() {
    console.log(`${this.name} has ${this.endurance} endurance.`);
    return this.endurance;
  }
  addEndurance(amount) {
    this.endurance += amount;
    console.log(`${this.name} gains ${amount} endurance.`);
  }
  removeEndurance(cost) {
    this.endurance -= cost;
    console.log(`${this.name} loses ${this.cost} endurance.`);
  }
// duplicate of addHealth?
/*
  heal(healing) {
    this.health += healing;
    console.log(`${this.name} gains ${healing} health.`);
  }
*/
  isDead() {
    return this.health <= 0 ? true : false;
  }
}

const Draaxx = new Entity("player", "Draaxx", 80, 3);
const Gayacus = new Entity("computer", "Gayacus", 50, 3);

class Abilities {
  slash(actor, opponent, mods) {
    console.log(`${actor.name} starts to cast slash on ${opponent.name}`);
    let attackerDamage = 15 + mods[actor.name].attack;
    console.log(attackerDamage, "damage + mod");
    let enduranceCost = 2 + mods[actor.name].endurance;
    let opponentDefense = 0 + mods[opponent.name].defense;
    console.log(opponentDefense, "defense + mod");
    let damage = attackerDamage - opponentDefense;
    console.log(attackerDamage, "damage - def");
    console.log(damage, "damage final");
    actor.removeEndurance(enduranceCost);
    opponent.removeHealth(damage);
  }
}

const cast = new Abilities();
const mods = {
  Draaxx: {
    attack: 5,
    defense: 0,
    endurance: -1
  },
  Gayacus: {
    attack: 0,
    defense: 2,
    endurance: 0
  }
}

Draaxx.removeHealth(15);
Draaxx.getHealth();
console.log(Draaxx.isDead());
cast.slash(Draaxx, Gayacus, mods);