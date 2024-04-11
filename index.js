// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

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
    let newCats = cats.slice(); // Create a copy of the original array
    newCats.push(name);
    return newCats;
}

function prependCat(name) {
    let newCats = cats.slice(); // Create a copy of the original array
    newCats.unshift(name);
    return newCats;
}

function removeLastCat() {
    let newCats = cats.slice(0, cats.length - 1); // Create a new array without the last element
    return newCats;
}

function removeFirstCat() {
    let newCats = cats.slice(1); // Create a new array without the first element
    return newCats;
}

// Reset the cats array to its original state before each test
beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});