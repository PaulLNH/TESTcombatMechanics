// Useful links?
// https://github.com/azerion/phaser-input - Input box for Phaser, good for char names, password, ect
// https://easystarjs.com/ - Asynchronous pathfinding in JS (for click to move)
// https://www.npmjs.com/package/pathfinding - more pathfinding
// https://www.npmjs.com/package/clone - clone objects, potentially use this if factories don't work
// https://www.npmjs.com/package/quickselect - to compute median latency using the Floyd-Rivest algorithm
// https://www.npmjs.com/package/random-weighted-choice - weighted random choices for loot drops


// DB info for Player
const Player = {
  user_name: "Draaxx",
  email: "draaxxtv@gmail.com",
  password: "placeholder",
  characters: ["Draaxx"],
  kills: 0,
  deaths: 0,
  matches_won: 0,
  matches_lost: 0,
  experience: 0
};

// DB info for Character
Entity = {
  name: "Draaxx",
  type: "Thracian",
  description: "the Thracian",
  max_health: 80,
  current_health: 80,
  dead: false,
  max_endurance: 3,
  current_endurance: 3,
  bonus_damage: 0,
  max_block: 0,
  current_block: 0,
  bonus_block: 0,
  max_initiative: 0,
  current_initiative: 0,
  talents: {},
  action: ["slash", "block", "dodge"],
  auras: []
};
