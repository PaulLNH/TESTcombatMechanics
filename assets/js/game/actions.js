const Template = require("./actions_template.json");

class Ability {
  constructor({name, cost, description, damage, block, ramp, duration, inititative}) {
    this.name = name;
    this.cost = cost;
    this.description = description;
    this.damage = damage;
    this.block = block;
    this.ramp = ramp;
    this.duration = duration;
    this.inititative = inititative;
  }
}
module.exports = {
  slash: new Ability(Template.slash),
  block: new Ability(Template.block),
  dodge: new Ability(Template.dodge),
  punch: new Ability(Template.punch),
  kick: new Ability(Template.kick),
  body_slam: new Ability(Template.body_slam)
}