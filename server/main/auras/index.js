const Auras = require("./auras_template.json");
const shortid = require("shortid");

class Aura {
  constructor(
    {
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
      current_tick,
      initiative,
      applies,
      applies_condition
    },
    source_type,
    source_id
  ) {
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
    this.current_tick = current_tick;
    this.initiative = initiative;
    this.applies = applies;
    this.applies_condition = applies_condition;
    this.source_type = source_type;
    this.source_id = source_id;
    this.aura_id = shortid.generate();
  }
}

// Use this if you want to create all auras at runtime
// const auras = {};
// const createAuras = () => {
//   for (let aura in Auras) {
//     if (Auras.hasOwnProperty(aura)) {
//       auras[aura] = new Aura(Auras[aura]);
//     }
//   }
// }
// createAuras();

// Use this to create unique auras on the fly
const addAura = (name, source_type, source_id) => {
  for (let aura in Auras) {
    if (Auras.hasOwnProperty(aura) && aura === name) {
      return new Aura(Auras[name], source_type, source_id);
    }
  }
};

// List avaiable auras
const listAuras = () => {
  return Object.keys(Auras);
};

// Apply aura
const applyAura = (aura, recipient) => {
  console.log(`${aura.name} is being applied to ${recipient.name}`);
  // Give recipient the aura object
  recipient.auras.push(aura);
  // "aura_type": "buff",
  // "duration": 1,
  // "max_stacks": 1,
  // "current_stacks": 1,
  // "instant_damage": 0,
  recipient.current_health -= aura.instant_damage;
  // "bonus_damage": 0,
  recipient.bonus_damage += aura.bonus_damage;
  // "instant_block": 0,
  recipient.current_block += aura.instant_block;
  // "bonus_block": 0,
  recipient.bonus_block += aura.bonus_block;
  // "tick_damage": 0,
  // "tick_block": 0,
  // "tick_rate": 1,
  // "initiative": -1,
  recipient.current_initiative += aura.initiative;
  // "applies": [],
  // "applies_condition": "test"
   if (aura.applies_condition === "instantiation") {
     // TODO - OK... So this sucks. I think we want to restructure auras. We want to be able to be flexible on how these auras interact and apply other auras.
     const applyAura = addAura(aura.applies[0], aura.type, aura.aura_id);
     // Not going to do much more on this until I look at how the auras object should look.
     // We want a better way to track ticks and figure out how combat invokes this.
    //  recipient.auras.push(applyAura(applyAura, recipient));
   }
};

module.exports = { addAura, applyAura, listAuras };
