const Arenas = require("./arenas_template.json");
const { addAura } = require("../../../auras");
const shortid = require("shortid");

class Arena {
  constructor(
    entities,
    {
      name,
      description,
      auras,
      start_combat_auras,
      end_combat_auras,
      max_turn_auras,
      loot,
      max_loot,
      max_turns,
      current_turn
    }
  ) {
    this.entities = entities;
    this.name = name;
    this.description = description;
    this.auras = auras;
    this.start_combat_auras = start_combat_auras;
    this.end_combat_auras = end_combat_auras;
    this.max_turn_auras = max_turn_auras;
    this.loot = loot;
    this.max_loot = max_loot;
    this.max_turns = max_turns;
    this.current_turn = current_turn;
    this.arena_id = shortid.generate();
  }
  newTurn() {
    this.turn++;
    return this;
  }
  startMatch() {
    // Apply starting auras to entities
    this.start_combat_auras.forEach(aura => {
      this.entities.forEach(entity => {
        apply(aura).to(entity);
      });
    });
    return this;
  }
}

// Rome
// .newTurn() This increments the turn counter
// .startMatch() Applies starting auras, sets endurance, ect
// .source(Draaxx)
// .performs("whirlwind")
// .on("all enemies")
// .then()
// .source(Draaxx)
// .performs("slash")
// .on(Gayacys)
// .end();

// List avaiable arenas
const listArenas = () => {
  return Object.keys(Arenas);
};

const newArena = (entities, name) => {
  if (Arenas.hasOwnProperty(name)) {
    const newArena = new Arena(entities, Arenas[name]);

    // Build starting auras
    const start_combat_auras = [];
    newArena.start_combat_auras.forEach(aura => {
      // addAura(name, source_id, parent_id, targets)
      const newAura = addAura(aura, newArena.id, newArena.id);
      start_combat_auras.push(newAura);
    });
    // Replace string values with aura objects
    newArena.start_combat_auras = start_combat_auras;

    // Build ending auras
    const end_combat_auras = [];
    newArena.end_combat_auras.forEach(aura => {
      const newAura = addAura(aura, newArena.id, newArena.id);
      end_combat_auras.push(newAura);
    });
    // Replace string values with aura objects
    newArena.end_combat_auras = end_combat_auras;

    // Build max turn auras
    const max_turn_auras = [];
    newArena.max_turn_auras.forEach(aura => {
      const newAura = addAura(aura, newArena.id, newArena.id);
      max_turn_auras.push(newAura);
    });
    // Replace string values with aura objects
    newArena.max_turn_auras = max_turn_auras;

    return newArena;
  }
};

module.exports = { newArena, listArenas };
