const { createPlayer } = require("./entities");

// TODO - Build Game object

const player_name = "Draaxx";
const player_type = "thracian";
const Player1 = createPlayer(player_name, player_type);
console.log(Player1);