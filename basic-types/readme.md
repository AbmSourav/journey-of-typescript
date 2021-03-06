# Basic Data Types in TypeScript

<br>

## Declear a Variable
If you use `const` then you can't reasign the value.
```ts
let variableName
let|const variableName: typeAnnotation = value
```

<br>

## 'Any' Type 
If you uncomment `noImplicitAny` in tsconfig.json file, then you'll get an error on 'any' typed variables.
```ts
let variableName; // Here the veriable is declared, but didn't asigned to a value. So the 'Type' of the variable is 'any'.

variableName = "Sourav" // Now TypeScript will get the 'string' type automatically.

```

<br>

## Explicit Types
Declaring the data type of a variable or paramiter Explicitly is called Explicit Types.
After an Explicit declaration you can't change the type.
```ts
const greetings: string = "Hello Universe"
let year: number = 2021

// Now if you try to change the type of year variable
// year = "2021"
// It will through an error.
```

<br>
<hr>
<br>


## Data Types:

### Boolean
The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
```ts
let isFalse: boolean = false
// Now if you try to reasign the value of isFalse to a any other type, then TypeScript will through an error.
// isFalse = "Hello" // changing type will through error.

console.log('Type of isFalse is ' + typeof(isFalse))
```

<br>

### Number
As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n; // BigInt literals are not available when targeting lower than ES2020.
console.log(typeof(decimal))
```

<br>

### String
Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
```ts
const greetings: string = "Hello Universe..."
console.log(typeof(greetings), greetings)
```

<br>

### Array
TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:
```ts
// 'any' type array
let arr = []
arr.push('Hello')
arr.push(2021)

// mixed types
let mixed = ["Apple", 2021, true]
// in this array you can push three types data: string|number|boolean
// mixed.push({"name": "Sourav"})   // if you try to put any other type then it'll through error.

// Explicitly declared array
let list: number[] = [1, 2, 3]
// here you can't put other type elements in this array.
// if you try list.push('Apple')
// Then typeScript will through error.

let unionType: (string | number)[] = [] // union type array
unionType.push('Hello')
unionType.push(2021)
// unionType.push(true)    // type error
```

<br>

### Object
object is a type that represents the non-primitive type.
```ts
let human = {
    name: "",
    canWalt: true,
}

human.name = 'Sourav'
// human.canTalk = true     // error: Property 'canTalk' does not exist on type
```
