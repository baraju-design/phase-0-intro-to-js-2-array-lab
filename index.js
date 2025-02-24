// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  return cats.concat(name); // Creates a new array with the new cat appended
}
//const cats = ["Milo", "Otis", "Garfield"];

function prependCat(name) {
  return [name, ...cats]; // Creates a new array with the new cat prepended
}
function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last cat
}
function removeFirstCat() {
  return cats.slice(1); // Returns a new array without modifying `cats`
}

//onsole.log(destructivelyRemoveLastCat(cats));
//console.log("Before:", cats);
//destructivelyRemoveLastCat();
//console.log("After:", cats);
