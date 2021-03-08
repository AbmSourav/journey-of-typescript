# Function

## Declare Function
Declaring a function in Typescript is as same as JavaScript.
```ts
function greetings() {
	console.log("Hello, Sourav!!")
}
greetings()	// result: "Hello, Sourav!!"

// arrow function
const arrow = () => console.log("Hello");
arrow();
```

<br>

## Parameter Type Annotations
When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts.
```ts
function greetings(name: string) {
	console.log("Hello, " + name.toUpperCase() + "!!");
}
greetings("Sourav")
```

<br>

## Return Type Annotations
You can also add return type annotations. Return type annotations appear after the parameter list:
```ts
function getData(): string | void {
	return console.log("Hello...");
}
getData(); // it returns void
```
