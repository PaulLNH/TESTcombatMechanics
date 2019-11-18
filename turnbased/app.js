// const abilities = {
//   strength: {
//     slash: {
//       description: "Deals 15 damage",
//       damage: 15,
//       block: 0,
//       cost: 2,
//       time: 2,
//       init: false,
//       cast: function(player, enemy) {
//         // do the thing
//         enemy.health -= this.strength.slash.damage;
//       }
//     }
//   },
//   defense: {
//     block: {
//       description: "Reduces 5 damage from next attack",
//       damage: 0,
//       block: 5,
//       cost: 1,
//       time: 1,
//       init: false,
//       cast: function() {
//         // do the thing
//       }
//     }
//   },
//   agility: {
//     dodge: {
//       description: "Dodge the next damage ability",
//       damage: 0,
//       block: 0,
//       cost: 2,
//       time: 0,
//       init: false,
//       cast: function() {
//         // do the thing
//       }
//     }
//   }
// };

// const combat = (actor, enemy) => {
//   if (actor.attackBonus > 0) {
//   }
// };

let Player = {
  health: 50,
  init: true,
  enduranceBase: 3,
  endurance: 3,
  attackBonus: 0,
  defenseBonus: 0,
  queue: [
    { actor: "player", time: 2, ability: "slash" },
    { actor: "player", time: 1, ability: "block" }
  ],
  abilities: {
    strength: {
      slash: {
        description: "Deals 15 damage",
        damage: 15,
        block: 0,
        cost: 2,
        time: 2,
        init: false,
        cast: function(enemy) {
          // do the thing
          enemy.health -= this.strength.slash.damage;
        }
      }
    },
    defense: {
      block: {
        description: "Reduces 5 damage from next attack",
        damage: 0,
        block: 5,
        cost: 1,
        time: 1,
        init: false,
        cast: function() {
          // do the thing
          this.defenseBonus += this.defense.block.block;
        }
      }
    },
    agility: {
      dodge: {
        description: "Dodge the next damage ability",
        damage: 0,
        block: 0,
        cost: 2,
        time: 0,
        init: false,
        cast: function() {
          // do the thing
        }
      }
    }
  }
};

let Gayacus = {
  health: 25,
  init: false,
  enduranceBase: 3,
  endurance: 3,
  attackBonus: 0,
  defenseBonus: 0,
  queue: [
    { actor: "gayacus", time: 1, ability: "body_slam" },
    { actor: "gayacus", time: 1, ability: "punch" }
  ],
  abilities: {
    strength: {
      punch: {
        description: "Deals 5 damage",
        damage: 5,
        block: 0,
        cost: 1,
        time: 1,
        init: false,
        cast: function(enemy) {
          // do the thing
          enemy.health -= this.strength.punch.damage;
        }
      },
      kick: {
        description: "Deals 10 damage",
        damage: 10,
        block: 0,
        cost: 1,
        time: 1.5,
        init: false,
        cast: function(enemy) {
          enemy.health -= this.strength.kick.damage;
        }
      }
    },
    agility: {
      body_slam: {
        description: "Chokehold a motherfucker slamming them into the ground",
        damage: 0,
        block: 0,
        cost: 2,
        time: 1,
        init: true,
        cast: function(enemy) {
          // do the thing
        }
      }
    }
  }
};

const playTurn = (attacker, defender) => {
  let init = "a";
  let combatQueue = [];
  let attackerTime = 0;
  let defenderTime = 0;
  attacker.queue.forEach(action => {
    action.time += attackerTime;
    attackerTime += action.time;
    combatQueue.push(action);
  });
  defender.queue.forEach(action => {
    action.time += defenderTime;
    defenderTime += action.time;
    combatQueue.push(action);
  });
  console.log("==================== unsorted ====================");
  console.log(combatQueue);
  console.log("==================================================");
  console.log("\n");
  console.log("\n");
  const sortedQueue = combatQueue.sort((a, b) => {
    if (a.time > b.time) {
      if (a.init) {
        return 1;
      } else if (b.init) {
        return 1;
      }
      return 1;
    } else {
      return -1;
    }
  });
  console.log("==================== sorted ====================");
  console.log(sortedQueue, "sorted");
  console.log("================================================");
  console.log("\n");
  console.log("\n");
};

playTurn(Player, Gayacus);
