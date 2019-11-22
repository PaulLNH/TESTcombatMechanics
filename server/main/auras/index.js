const Auras = require("./auras_template.json");

class Aura {
  constructor({
    name,
    description,
    affects,
    duration,
    max_stacks,
    current_stacks,
    instant_damage,
    instant_block,
    tick_damage,
    tick_block,
    tick_rate,
    initiative
  }) {
    this.name = name;
    this.description = description;
    this.affects = affects;
    this.duration = duration;
    this.max_stacks = max_stacks;
    this.current_stacks = current_stacks;
    this.instant_damage = instant_damage;
    this.instant_block = instant_block;
    this.tick_damage = tick_damage;
    this.tick_block = tick_block;
    this.tick_rate = tick_rate;
    this.initiative = initiative;
  }
}

const auras = {};
const createAuras = () => {
  for (let aura in Auras) {
    if (Auras.hasOwnProperty(aura)) {
      auras[aura] = new Aura(Auras[aura]);
    }
  }
}
createAuras();

const addAura = name => {
  for (let aura in Auras) {
    if (Auras.hasOwnProperty(aura) && aura === name) {
      return new Aura(Auras[name]);
    }
  }
}

const listAuras = () => {
  return Object.keys(Auras);
}

module.exports = { auras, addAura, listAuras };
