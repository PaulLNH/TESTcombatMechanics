const { newCharacter } = require("../");

// characters have talents

// Get character's username
const character_name = "Draaxx";
// Get character template
const character_type = "thracian";
// Create a new player object with these values
const Player1 = newCharacter(character_name, character_type);
console.log(Player1);
