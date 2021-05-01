"use strict";
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Sourav";
        this.email = "keramotul.islam@gmail.com";
    }
    Person.prototype.greetings = function () {
        return "Hello...";
    };
    return Person;
}());
var person = new Person();
console.log(person.name, person.email, person.greetings());
// strict property initialization
var Car = /** @class */ (function () {
    function Car() {
        this.name = "BMW";
        console.log(this.name);
    }
    return Car;
}());
// new Car();
