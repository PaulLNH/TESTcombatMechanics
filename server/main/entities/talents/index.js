const Talents = require("./talents_template.json");

class Talent {
  constructor({
    id,
    title,
    depends_on,
    description,
    auras,
    gain_ability,
    max_points,
    stats
  }) {
    this.id = id;
    this.title = title;
    this.depends_on = depends_on;
    this.description = description;
    this.auras = auras;
    this.gain_ability = gain_ability;
    this.max_points = max_points;
    this.stats = stats;
  }
}

const newTalentTree = () => {
  const talents = {};
  for (let talent in Talents) {
    if (Talents.hasOwnProperty(aura)) {
      talents[talent] = new Talent(Talents[talent]);
    }
  }
  return talents
}

module.exports = { newTalentTree };
