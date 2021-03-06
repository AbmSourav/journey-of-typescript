
// Types

// Boolean 
const isFalse: boolean = false;
// console.log('Type of isFalse is ' + typeof(isFalse))


// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n; // BigInt literals are not available when targeting lower than ES2020.
// console.log(typeof(octal))


// String
const greetings: string = "Hello Universe..."
// console.log(typeof(greetings), greetings)


// Array
let arr = []    // any type
arr.push('Hello')
arr.push(2021)

let mixed = ["Apple", 2021, true]
// mixed.push({"name": "Sourav"})   // type error

let list: number[] = [1, 2, 3]  // Explicitly declared array


// Object
let human = {
    name: "",
    canWalt: true,
}
human.name = 'Sourav'
// human.canTalk = true     // error: Property 'canTalk' does not exist on type
