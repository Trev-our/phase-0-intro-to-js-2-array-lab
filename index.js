// Global array of cats with initial values
var cats = ["Milo", "Otis", "Garfield"];

// Destructively appends a cat to the end of the cats array.
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

// Destructively prepends a cat to the beginning of the cats array.
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

// Destructively removes the last cat from the cats array.
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

// Destructively removes the first cat from the cats array.
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

// Returns a new array with the given cat appended; does not modify the global cats array.
function appendCat(name) {
  return [...cats, name];
}

// Returns a new array with the given cat prepended; does not modify the global cats array.
function prependCat(name) {
  return [name, ...cats];
}

// Returns a new array with the last cat removed; does not modify the global cats array.
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
  // Alternatively, you could also use: return cats.slice(0, -1);
}

// Returns a new array with the first cat removed; does not modify the global cats array.
function removeFirstCat() {
  return cats.slice(1);
}

