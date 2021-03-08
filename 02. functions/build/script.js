"use strict";
// parameter type annotation
function greetings(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greetings("Sourav");
// arrow function
var arrow = function () { return console.log("Hello"); };
arrow();
// return type annotation
function getData() {
    return console.log("Hello...");
}
getData();
