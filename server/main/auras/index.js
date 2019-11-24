const Auras = require("./auras_template.json");
const shortid = require("shortid");

class Aura {
  constructor(
    {
      name,
      source_description,
      parent_description,
      target_description,
      triggers
    },
    source_id,
    parent_id,
    targets
  ) {
    this.name = name;
    this.source_description = source_description;
    this.parent_description = parent_description;
    this.target_description = target_description;
    this.triggers = triggers;
    this.source_id = source_id;
    this.parent_id = parent_id;
    this.targets = targets;
    this.id = shortid.generate();
  }
}

// Use this if you want to create all auras at runtime
// const auras = {};
// const createAuras = () => {
//   for (let aura in Auras) {
//     if (Auras.hasOwnProperty(aura)) {
//       const newAura = new Aura(Auras[name]);
//       Game[newAura.id] = newAura;
//       auras[aura] = newAura;
//     }
//   }
// };
// createAuras();

// Use this to create unique aura instance
const addAura = (name, source_id, parent_id, targets) => {
  for (let aura in Auras) {
    if (Auras.hasOwnProperty(aura) && aura === name) {
      const newAura = new Aura(Auras[name], source_id, parent_id, targets);
      Game[newAura.id] = newAura;
      // Logic for on_add trigger
      const on_add_triggers = [
        "perform_to_source_on_add",
        "perform_to_parent_on_add",
        "perform_to_targets_on_add"
      ];
      // Resolve each trigger by looping through triggers object
      // newAura[trigger].triggers (newAura.triggers.perform_to_source_on_add)
      on_add_triggers.forEach(trigger => {
        resolveOnAddTriggers(newAura, trigger);
      });
      return newAura;
    }
  }
};

// List avaiable auras
const listAuras = () => {
  return Object.keys(Auras);
};

const resolveOnAddTriggers = (aura, trigger) => {
  console.log(aura, "aura");
  console.log(trigger, "trigger");
  for (let resolve in aura.triggers[trigger]) {
    // switch case to target each trigger
    switch (resolve) {
      case "max_health":
        console.log(resolve.max_health, "Expected: max_health");
        break;
      case "current_health":
        console.log(resolve, "Expected: current_health");
        break;
      case "max_endurance":
        console.log(resolve, "Expected: max_endurance");
        break;
      case "current_endurance":
        console.log(resolve, "Expected: current_endurance");
        break;
      case "bonus_damage":
        console.log(resolve, "Expected: bonus_damage");
        break;
      case "max_block":
        console.log(resolve, "Expected: max_block");
        break;
      case "current_block":
        console.log(resolve, "Expected: current_block");
        break;
      case "bonus_block":
        console.log(resolve, "Expected: bonus_block");
        break;
      case "max_initiative":
        console.log(resolve, "Expected: max_initiative");
        break;
      case "current_initiative":
        console.log(resolve, "Expected: current_initiative");
        break;
      case "auras":
        console.log(resolve, "Expected: auras");
        break;
      case "destroy":
        console.log(resolve, "Expected: destroy");
        break;
      case "ticks_remaining":
        console.log(resolve, "Expected: ticks_remaining");
        break;
    }
  }
};

module.exports = { addAura, listAuras };
