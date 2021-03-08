# Advanced Types

## Union Types
A variable or parameter can espects two or more types. Like `number` or `string`.
```ts
let data: number | string
data = 'Hello'
data = 2021
// data = {greetings: "Hello Universe"}	// type error

// union type in funtion parameter
function getResponse(res: object | null) {
	console.log(res)
}
getResponse({data: "posts"})
// getResponse(2021)	// type error

// array union type
let arr: (string | number)[] = []
arr.push('Sourav')
arr.push(2021)
```

## Enum Type
Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants.
<br>

By default, enums begin numbering their members starting at 0.
```ts
enum Color {
	Red,
	Green,
	Blue,
}
let enumType: Color = Color.Red;
console.log(enumType)	// 0

// defined value for enum
enum ColorString {
	Red = 'red',
	Green = 'green',
	Blue = 'blue',
}
let asignedValue: ColorString = ColorString.Green;
console.log(asignedValue)	// 'green'
```

<br>

## Never
The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.
```ts
function errorMsg(message: string): never {
  throw new Error(message);
}
errorMsg('Error Message')	// prints a error message.
```

## Interface
// toDo: add interface doc link