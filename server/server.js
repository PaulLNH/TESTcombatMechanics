// TODO - Create a node/express server
// J/K see app.js in root

const { listAuras, addAura } = require("./main/auras");
const { listActions, addAction } = require("./main/entities/actions");
const { newCharacter } = require("./main/entities");

console.log(listAuras());
console.log(listActions());

const Bleed = addAura("bleed");
console.log(Bleed);

const Slash = addAction("slash");
console.log(Slash);

const character_name = "Draaxx";
const character_type = "thracian";

const computer_name = "Gayacus";
const computer_type = "samnite";

const Player = newCharacter(character_name, character_type);
const Computer = newCharacter(computer_name, computer_type);
console.log(Player);
console.log(Computer);
