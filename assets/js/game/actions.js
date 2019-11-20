const Actions = require("./actions_template.json");
const { auras: Auras } = require("./auras");

class Action {
  constructor(
    { name, cost, description, damage, block, ramp, duration, initiative },
    ...auras
  ) {
    this.name = name;
    this.cost = cost;
    this.description = description;
    this.damage = damage;
    this.block = block;
    this.ramp = ramp;
    this.duration = duration;
    this.initiative = initiative;
    this.auras = auras;
  }
}

const actions = {};
const createActions = () => {
  // loop through keys in actions obj
  for (let action in Actions) {
    // if the key exists
    if (Actions.hasOwnProperty(action)) {
      // create an aura list
      const auraList = [];
      // if the action has an aura
      if (Actions[action].auras.length) {
        // for each aura in the actions auras arrray
        Actions[action].auras.forEach(aura => {
          // push the aura to the aurasList
          auraList.push(Auras[aura]);
        });
      }
      // create new action with auras if applicable
      actions[action] = new Action(Actions[action], ...auraList);
    }
  }
};
createActions();

module.exports = { actions };
