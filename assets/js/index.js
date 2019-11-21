// How to execute a function from a string
// Object we want to access
const entity = "Actor";
// function we want to run
const fs = "getName";
const params = [1, 2, 3];

// find object
const fn = Actor[fs];
// this looks in the Actor class for the method getName()

// is object a function?
// if so we can call it
// if we need to add params we can use .apply()
if (typeof fn === "function") fn().apply(params);
