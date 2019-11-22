// TODO - Create a node/express server
// J/K see app.js in root

const { listAuras, addAura } = require("./main/auras");

console.log(listAuras());

const Bleed = addAura("bleed");
console.log(Bleed);