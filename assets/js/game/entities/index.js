const { actions } = require("../actions");

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
  getHealth() {
    console.log(`${this.name} has ${this.health} health.`);
    return this.health;
  }
  addHealth(amount) {
    this.health += amount;
    console.log(`${this.name} gains ${amount} health.`);
    return this;
  }
  removeHealth(cost) {
    this.health -= cost;
    console.log(`${this.name} loses ${cost} health.`);
    return this;
  }
  getAuras() {
    return this.auras;
  }
  addAura(aura) {
    this.auras.push(aura);
    return this;
  }
  removeAura(aura) {
    //Do we need to splice?
    this.auras.pop(aura);
    return this;
  }
  getEndurance() {
    console.log(`${this.name} has ${this.endurance} endurance.`);
    return this.endurance;
  }
  addEndurance(amount) {
    this.endurance += amount;
    console.log(`${this.name} gains ${amount} endurance.`);
    return this;
  }
  removeEndurance(cost) {
    this.endurance -= cost;
    console.log(`${this.name} loses ${cost} endurance.`);
    return this;
  }
  isDead() {
    return this.health <= 0 ? true : false;
  }
  perform(name) {
    // get action object, save it to actor
    this.action = actions[name];
    // check to see if this action can be performed
    // calculate and adjust resources
    if (this.action.auras.length) {
      this.action.auras.forEach(aura => {
        if (aura.affects === "actor") {
          console.log(`${this.getName()} ${aura.description}`);
        }
      });
    }
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
    this.action.auras.forEach(aura => {
      if (aura.affects === "recipient") {
        console.log(`${recipient.getName()} ${aura.description}`);
      }
    });
    // recipient.receive(this.action);
    return this;
  }
  receive(thing) {
    console.log(`${thing.actor} uses ${thing.name} on ${this.getName()}`);
    return this;
  }
}

const Draaxx = new Entity("player", "Draaxx", 80, 3);
const Gayacus = new Entity("computer", "Gayacus", 50, 3);

// Draaxx.perform("slash").on(Gayacus);
// Draaxx.perform("block");
Gayacus.perform("body_slam").on(Draaxx);