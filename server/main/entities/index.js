const { addAction } = require("./actions");
const { addAura } = require("../auras");
const Entities = require("./entities_template.json");
const shortid = require("shortid");

// Entities:
// Characters - have talents
// Computers - have loot that can drop

class Entity {
  constructor(
    name,
    {
      type,
      description,
      name_prefix,
      name_suffix,
      max_health,
      current_health,
      dead,
      max_endurance,
      current_endurance,
      bonus_damage,
      max_block,
      current_block,
      bonus_block,
      max_initiative,
      current_initiative,
      talents,
      actions,
      auras
    }
  ) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.name_prefix = name_prefix;
    this.name_suffix = name_suffix;
    this.max_health = max_health;
    this.current_health = current_health;
    this.dead = dead;
    this.max_endurance = max_endurance;
    this.current_endurance = current_endurance;
    this.bonus_damage = bonus_damage;
    this.max_block = max_block;
    this.current_block = current_block;
    this.bonus_block = bonus_block;
    this.max_initiative = max_initiative;
    this.current_initiative = current_initiative;
    this.talents = talents;
    this.actions = actions;
    this.auras = auras;
    this.entity_id = shortid.generate();
  }
}

const newEntity = (name, type) => {
  if (Entities.hasOwnProperty(type)) {
    const newEntity = new Entity(name, Entities[type]);
    // for each action in the list, create a new action via constructor
    // and push to the list, swapping old list of strings for new list of actions
    const actionList = newEntity.actions;
    const actions = [];
    actionList.forEach(actionName => {
      actions.push(addAction(actionName));
    });
    newEntity.actions = actions;

    // for each aura in the list, create a new aura via constructor
    // and push to the list, swapping old list of strings for new list of auras
    const auraList = newEntity.auras;
    const auras = [];
    auraList.forEach(auraName => {
      auras.push(addAura(auraName), newEntity);
    });
    newEntity.auras = auras;

    return newEntity;
  }
};

module.exports = { newEntity };
