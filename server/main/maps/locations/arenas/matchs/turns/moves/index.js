const shortid = require('shortid');

// Player makes a move in a turn
// New move is created
// Move data: actor, ability, recipients(s)
// ID the move for saving data
// entity performaing action
// entity(s) action is applied to
// action is stored
// endurance is reduced
// return any auras applied

class Move {
  constructor(actor, ability, recipients) {
    this.actor = actor;
    this.ability = ability;
    this.recipients = recipients;
    this.id = shortid.generate();
  }
  
}

const test = new Move("Draaxx", "slash", "Gayacus");
console.log(test);