const shortid = require("shortid");

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
  attack() {
    recipients.forEach(recipient => {
      this.actor.party.includes(recipient)

    });
  }
}

const test1 = new Move("Draaxx", "slash", "Gayacus");
const test2 = new Move("Gayacus", "block", "Gayacus");
const test3 = new Move("Freddy", "dodge", "Karyn");
const test4 = new Move("Draaxx", "slash", "Gayacus");
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

// Rome
// .turn(1)
// .combat()
// .source(Draaxx)
// .performs("whirlwind")
// .on("all enemies")
// .then()
// .source(Draaxx)
// .performs("slash")
// .on(Gayacys)
// .end();