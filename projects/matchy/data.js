/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declar variable named animal
 var animal = {};

//using dot notation add key species and a value of a animal
animal.species = 'Lemur Monkey';

//usinng bracket notation add key of name and add a value of a name
animal['name']  = 'Betty';

//using either braccket or dot notation add a key noises with an empty array
animal.noises = [];

//console.log to view progress

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//creating noises variable with empty array

var noises = [];

//using .push to add 4 different sounds.

noises.push('Ehhe');
noises.push('OhhOhh');
noises.push('Hmmm');
noises.push('hmmm');
    
noises.push('Eeek');



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//assigna noises array to noises property

animal.noises = noises;

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Creat a new variable called animals assign to an empty array.
//put animal inside animals.

var animals =[];

animals.push(animal);
console.log(animals);

var duck = { species: 'duck',
name: 'Jerome',
noises: ['quack', 'honk', 'sneeze', 'woosh'] };


var liger = {
    species: 'Big Cat',
    name: 'Freya',
    noises: ['Rawr', 'Purr', 'Growl', 'Rrr',],
};

var kingCorso = {
    species: 'Dog',
    name: 'Odin',
    noises: ['Bark', 'Growl', 'cry'], 
};


console.log(kingCorso);


animals.push(kingCorso, liger, duck);

console.log(animals);
console.log(animals.length);





//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Creating an array of friends so I can add animals array and the animal objects inside


var friends = [];

//create a function using math.random to generate a random animal in animals array using its index
function getRandom(animals, index) {
    return Math.floor(Math.random() * Math.floor(index));
}








/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}








