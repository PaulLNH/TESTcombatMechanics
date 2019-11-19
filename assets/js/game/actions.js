const action = require("./actions_template.json");
const Aura = require("./auras");

class Action {
  constructor({name, cost, description, damage, block, ramp, duration, initiative}, ...auras) {
    this.name = name;
    this.cost = cost;
    this.description = description;
    this.damage = damage;
    this.block = block;
    this.ramp = ramp;
    this.duration = duration;
    this.initiative = initiative;
    this.auras = auras;
  }
}

console.log(Aura.slammed);

module.exports = {
  slash: new Action(action.slash, Aura.slammed),
  block: new Action(action.block),
  dodge: new Action(action.dodge),
  punch: new Action(action.punch),
  kick: new Action(action.kick),
  body_slam: new Action(action.body_slam)
}
