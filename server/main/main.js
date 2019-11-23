// Game Files

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
