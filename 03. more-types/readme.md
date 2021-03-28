# Advanced Types

<br>
<br>

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

<br>

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

<br>

## Generics
In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

<br>

For Example, in a api response we don't know what'll be the structure/type of the response. But we need to access those data. Here we can get the `type/stucture` with generic type anotation: `<anything>`. By convention we write `<T>` **T** in it.
<br>

`<T>` After the function name will receive the type and send it to `obj: T`
```ts
function apiResponse<T>(obj: T) {
	return obj;
}

const response = apiResponse({
	code: 200,
	message: 'OK',
	data: []
})
console.log(response.code);
```

<br>

You must be thinking, we can do it this way...
No we can't do it. TypeScript will through an error.
```ts
function apiResponse(obg: object) {
	return obg;
}
const res = apiResponse({
	code: 200,
	message: 'OK',
	data: []
})
console.log(res.code);	// Error: 'code' does not exist on type 'object'.
```

<br>

Now we also get a problem on the above example. We said `<T>`, that means any type will be acceptable. For example, if we try this we'll not get any error.
```ts
const response = apiResponse('Hello Universe')
console.log(response);
```

<br>

The good news is TypeScript also has a solution for this. We can extend other *type* in `<T>`
```ts
function apiResponse<T extends object>(obj: T) {
	return obj;
}
```

<br>

## Literal Types
In addition to the general types string and number, we can refer to specific strings and numbers in type positions.
```ts
type Alignment = "left" | "center" | "right";

function alignment(selector: string, align: Alignment) {
	const el = document.getElementById(selector)!
	el.style.textAlign = align
}
alignment("#root", "center")
```

