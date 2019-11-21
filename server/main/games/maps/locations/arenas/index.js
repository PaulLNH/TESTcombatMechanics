class Arena {
  constructor(
    entities,           // Entity objects in this arena
    auras,              // Aura objects present in this arena
    start_combat_auras, // {String} aura names to start combat
    end_combat_auras,   // {String} aura names to execute at end of combat
    max_turn_aura,      // {String} aura names to execute when reaching max turns
    loot,               // Loot table
    maxLoot,            // Max number of loot items winner can pick
    maxTurns,           // Max number of turns before maxTurnAuras is executed
    currentTurn         // Current turn
  ) {
    this.entities = entities;
    this.auras = auras;
    this.start_combat_auras = start_combat_auras;
    this.end_combat_auras = end_combat_auras;
    this.max_turn_aura = max_turn_aura;
    this.loot = loot;
    this.maxLoot = maxLoot;
    this.maxTurns = maxTurns;
    this.currentTurn = currentTurn;
  }
  turn(n) {
    // Should a new turn be it's own class?
    return this;
  }
}

// TODO - Arenas interaction

// Rome
// .turn(1)
// .combat()
// .source(Draaxx)
// .performs("whirlwind")
// .on("all enemies")
// .then()
// .source(Draaxx)
// .performs("slash")
// .on(Gayacys)
// .end();

const Rome = new Arena(
  ["Draaxx", "Freddy", "Karyn"],
  ["fun", "happiness", "silly"],
  "slash",
  "end combat aura",
  1,
  1,
  1,
  1,
  1
);

console.log(Rome);
