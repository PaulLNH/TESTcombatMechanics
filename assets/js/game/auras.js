const aura = require("./auras_template.json");

class Aura {
  constructor({
    name,
    description,
    affects,
    duration,
    instant_damage,
    instant_block,
    tick_damage,
    tick_block,
    tick_rate,
    initiative
  }) {
    this.name = name;
    this.description = description;
    this.affects = affects,
    this.duration = duration;
    this.instant_damage = instant_damage;
    this.instant_block = instant_block;
    this.tick_damage = tick_damage;
    this.tick_block = tick_block;
    this.tick_rate = tick_rate;
    this.initiative = initiative;
  }
}

module.exports = {
  slammed: new Aura(aura.slammed)
};
