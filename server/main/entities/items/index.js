const Items = require("./items_template.json");
const Game = require("../../../server");
const { auras: Auras } = require("../../auras");
const shortid = require("shortid");

class Item {
  constructor(
    {
      name,
      description,
      active,
      can_be_dropped,
      strength_aura,
      defense_aura,
      agility_aura
    },
    ...auras
  ) {
    this.name = name;
    this.description = description;
    this.active = active;
    this.can_be_dropped = can_be_dropped;
    this.strength_aura = strength_aura;
    this.defense_aura = defense_aura;
    this.agility_aura = agility_aura;
    this.current_item_slot = null;
    this.auras = auras;
    this.id = shortid.generate();
  }
  equip(slot) {
    // TODO - Equip item - puts item in a slot
    // Check to see if this is currently in an entities item slot
    // Yes: remove this from the entities item slot
    // and remove the aura associated with that slot from the entity
    // add this item to the slot this is being moved to {Param}
    // ?? if this is moved onto the ground, call this.drop()
    return this;
  }
  drop() {
    // TODO - Drop item - do we need this?
    return this;
  }
}

const items = {};
const createItems = () => {
  // loop through keys in actions obj
  for (let item in Items) {
    // if the key exists
    if (Items.hasOwnProperty(item)) {
      const aurasToAdd = [];
      aurasToAdd.push(Items[item].strength_aura);
      aurasToAdd.push(Items[item].defense_aura);
      aurasToAdd.push(Items[item].agility_aura);
      // create an aura list
      const auraList = [];
      // for each aura this item has
      aurasToAdd.forEach(aura => {
        // push the aura to the aurasList
        auraList.push(Auras[aura]);
      });
      // create new item with aura for each slot
      items[item] = new Item(Items[item], ...auraList);
    }
  }
};
createItems();

const addItem = name => {
  for (let item in Items) {
    if (Items.hasOwnProperty(item) && item === name) {
      const newItem = new Action(Items[name]);
      Game[newItem.id] = newItem;
      return newItem;
    }
  }
};

module.exports = { items, addItem };
