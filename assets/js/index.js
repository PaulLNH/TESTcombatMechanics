// const Arena = require("./game/arena");
const { createPlayer } = require("./game/entities");

// Game is created
  // Game has Entities
//    // Entities have Auras
//    // Entities have Actions
//      // Actions have Auras
    // Entities have Talents
      // Talents have Auras
    // Entities have Inventory
      // Inventory has Items
        // Items have Auras
  // Game has a Map
    // Maps have Arenas


// Creating a new player:
  // Step 1: import entities class
  // Step 2: player selects which template they want
  // Step 3: Player name is made into a new class passing in the name and the template
const player_name = "Draaxx";
const player_type = "thracian";
const Player1 = createPlayer(player_name, player_type);
console.log(Player1);








// // How to execute a function from a string
// // Object we want to access
// const entity = "Actor";
// // function we want to run
// const fs = "getName";
// const params = [1, 2, 3];

// // find object
// const fn = Actor[fs];
// // this looks in the Actor class for the method getName()

// // is object a function?
// // if so we can call it
// // if we need to add params we can use .apply()
// if (typeof fn === "function") fn().apply(params);
