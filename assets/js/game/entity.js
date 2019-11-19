const Action = require("./actions");

class Entity {
  constructor(type, name, maxHealth, maxEndurance) {
    this.type = type;
    this.name = name;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.maxEndurance = maxEndurance;
    this.endurance = maxEndurance;
    this.action = {};
    this.auras = [];
  }
  getName() {
    return this.name;
  }
  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} loses ${damage} health.`);
  }
  addAura(aura) {
    this.auras.push(aura);
    return this;
  }
  getAuras() {
    return this.auras;
  }
  getEndrance() {
    return this.endurance;
  }
  useEndurance(cost) {
    this.endurance -= cost;
    return this;
  }
  gainEndurance(amount) {
    this.endurance += amount;
    return this;
  }
  heal(healing) {
    this.health += healing;
    console.log(`${this.name} gains ${healing} health.`);
    return this;
  }
  getHealth() {
    console.log(`${this.name} has ${this.health} health.`);
    return this.health;
  }
  isDead() {
    return this.health <= 0 ? true : false;
  }
  preform(name) {
    // get action object, save it to actor
    // check to see if this action can be preformed
    // calculate and adjust resources
    this.action = Action[name];
    this.action.auras.forEach(aura => {
      if (this.affects === "actor") {
        console.log(`${aura.name} ${aura.description}`);
      }
    });
    if (this.action.block > 0) {
      console.log(`${this.getName()} ${this.action.description}`);
    }
    if (this.action.damage > 0) {
      this.action.actor = this.getName();
    }
    return this;
  }
  on(recipient) {
    // use this.action on recipient
    console.log(`${this.action.name} was used on ${recipient.getName()}`);
    console.log(this.action.auras)
    this.action.auras.forEach(aura => {
      if (this.affects === "recipient") {
        console.log(`${aura.name} ${aura.description}`);
      }
    });
    recipient.receive(this.action);
    return this;
  }
  receive(thing) {
    console.log(`${thing.actor} uses ${thing.name} on ${this.getName()}`);
    return this;
  }
}

const Draaxx = new Entity("player", "Draaxx", 80, 3);
const Gayacus = new Entity("computer", "Gayacus", 50, 3);

// console.log(Action.slash);
// Draaxx.preform("slash").on(Gayacus);
// Draaxx.preform("block");
Gayacus.preform("body_slam").on(Draaxx);
