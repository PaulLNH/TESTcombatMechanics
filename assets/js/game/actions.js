class Ability {
  constructor(name, cost, description, damage, block, ramp, duration, inititative) {
    this.name = name;
    this.cost = cost;
    this.description = description;
    this.damage = damage;
    this.block = block;
    this.ramp = ramp;
    this.duration = duration;
    this.inititative = inititative;
  }
}

module.exports = {
  slash: new Ability("Slash", 2, "A slashing attack", 15, 0, 2, 1, 0),
  block: new Ability("Block", 1, "Raise your shield to reduce damage", 0, 5, 1, 1, 0),
  dodge: new Ability("Dodge", 2, "Move out of the way of the next attack", 0, 0, 0, -1, 0),
  punch: new Ability("Punch", 1, "Punch opponent in the face", 5, 0, 1, 1, 0),
  kick: new Ability("Kick", 1, "Front kick enemy in the chest", 10, 0, 1.5, 1, 0),
  bodyslam: new Ability("Body Slam", 2, "Throw your opponent in the air then slamming them down onto the arena floor", 5, 0, 1, 2, 1)
}