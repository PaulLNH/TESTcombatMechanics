const { actions } = require("./actions");
const Entities = require("./entities_template.json");

class Entity {
  constructor(
    name,
    {
      type,
      description,
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
    this.action = actions;
    this.auras = auras;
  }
}

const newCharacter = (name, type) => {
  if (Entities.hasOwnProperty(type)) {
    return new Entity(name, Entities[type]);
  }
};

module.exports = { newCharacter };
