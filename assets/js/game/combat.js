/**
 * @function processRound
 * @description Processes each round of every match
 *
 * @param {Array} actionQueue Action objects
 *
 * @return {Array} Actions that presist past this round
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
   * @function preformActions
   * @description Performs actions in order
   *
   * @param {Array} actions Action objects
   *
   * @return {Array} Actions that presist past this round
   */
  const preformActions = actions => {
    // reslove actions by:
    // iterating over each action calling Actor.preform(action)
    let unresolvedActions =
      "Any action that lasts multiple turns or has an affect that presists past this turn";
    return unresolvedActions;
  };
  return unresolvedActions;
};
