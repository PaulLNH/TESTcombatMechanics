/**
 * @function processRound
 * @description Processes each round of every match
 *
 * @param {Array} actionQueue Action objects
 *
 * @return {Array} Actions that persist past this round
 */
module.export = processRound = actionQueue => {
  /**
   * @function sortActions
   * @description Sorts the action queue
   *
   * @param {Array} actions Action objects
   *
   * @return {Array} Actions in execution order
   */
  const sortActions = actions => {
    // reslove time
    // timeline
    // intuition
    // movedFirst
    let actionTimeline =
      "actions sorted by timeline, intuition, then movedFirst";
    return actionTimeline;
  };

  /**
   * @function applyAuras
   * @description Applies pre-combat auras to each action in the action queue
   *
   * @param {Array} actions Action objects
   * @param {Array} auras Buffs / debuffs
   *
   * @return {Array} Action objects
   */
  const applyAuras = (actions, auras) => {
    // actionQueue modified by auras
    let preProcessedActions = "actionQueue modified by auras";
    return preProcessedActions;
  };

  /**
   * @function performActions
   * @description Performs actions in order
   *
   * @param {Array} actions Action objects
   *
   * @return {Array} Actions that persist past this round
   */
  const performActions = actions => {
    // reslove actions by:
    // iterating over each action calling Actor.perform(action)
    let unresolvedActions =
      "Any action that lasts multiple turns or has an affect that presists past this turn";
    return unresolvedActions;
  };
  return unresolvedActions;
};

// const playTurn = (attacker, defender) => {
//   let init = "a";
//   let combatQueue = [];
//   let attackerTime = 0;
//   let defenderTime = 0;
//   attacker.queue.forEach(action => {
//     action.time += attackerTime;
//     attackerTime += action.time;
//     combatQueue.push(action);
//   });
//   defender.queue.forEach(action => {
//     action.time += defenderTime;
//     defenderTime += action.time;
//     combatQueue.push(action);
//   });
//   console.log("==================== unsorted ====================");
//   console.log(combatQueue);
//   console.log("==================================================");
//   console.log("\n");
//   console.log("\n");
//   const sortedQueue = combatQueue.sort((a, b) => {
//     if (a.time > b.time) {
//       if (a.init) {
//         return 1;
//       } else if (b.init) {
//         return 1;
//       }
//       return 1;
//     } else {
//       return -1;
//     }
//   });
//   console.log("==================== sorted ====================");
//   console.log(sortedQueue, "sorted");
//   console.log("================================================");
//   console.log("\n");
//   console.log("\n");
// };

// playTurn(Player, Gayacus);