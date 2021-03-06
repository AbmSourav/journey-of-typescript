"use strict";
// Types
// Boolean 
var isFalse = false;
// console.log('Type of isFalse is ' + typeof(isFalse))
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let big: bigint = 100n; // BigInt literals are not available when targeting lower than ES2020.
// console.log(typeof(octal))
// String
var greetings = "Hello Universe...";
// console.log(typeof(greetings), greetings)
// Array
var arr = []; // any type
arr.push('Hello');
arr.push(2021);
var mixed = ["Apple", 2021, true];
// mixed.push({"name": "Sourav"})   // type error
var list = [1, 2, 3]; // Explicitly declared array
// Object
var human = {
    name: "",
    canWalt: true,
};
human.name = 'Sourav';
// human.canTalk = true     // error: Property 'canTalk' does not exist on type
