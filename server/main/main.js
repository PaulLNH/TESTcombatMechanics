const { createPlayer } = require("./games/entities");
const { items } = require("./games/entities/items");

// TODO - Build Game
// - One game server / world
// - Multiple players
// - Each player can have multiple characters

const player_name = "Draaxx";
const player_type = "thracian";
const Player1 = createPlayer(player_name, player_type);
console.log(Player1);

// console.log(items);
// console.log(items["greaves"]);
// console.log(items["greaves"].auras);

// TODO - Logic to create new player
// TODO - Logic for a player to chreate a new character
