// TODO - Create a node/express server
// J/K see app.js in root

const { listAuras, applyAura, addAura } = require("./main/auras");
const { listActions, addAction } = require("./main/entities/actions");
const { newEntity } = require("./main/entities");
const { newArena } = require("./main/maps/locations/arenas");

// console.log(listAuras(), "Auras");
// console.log(listActions(), "Actions");

const Bleed = addAura("bleed");
// console.log(Bleed);

const Slash = addAction("slash");
// console.log(Slash);

const character_name = "Draaxx";
const character_type = "thracian";

const computer_name = "Gayacus";
const computer_type = "samnite";

const Player = newEntity(character_name, character_type);
const Computer = newEntity(computer_name, computer_type);
// console.log(Player);
// console.log(Computer);

const Rome = newArena([Player, Computer], "rome");
console.log(Rome);

Player.auras.forEach(aura => {
  applyAura(aura, Player);
});