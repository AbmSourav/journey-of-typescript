# Class

TypeScript offers full support for the class keyword introduced in ES2015.

<br>

Here is a basic example of a class:
```ts
class Person {
	name = "Sourav";
	email = "keramotul.islam@gmail.com";
}
```

<br>

## Strict Property Initialization
The `strictPropertyInitialization` setting controls whether class fields need to be initialized in the constructor.

```ts
// It will provide this error message: "Property 'name' has no initializer and is not definitely assigned in the constructor".
class Person {
  name: string;
}

// solution
class Person {
	constructor() {
		this.name = "Sourav"
	}

  	name: string;
}
```

<br>

## Method
A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors.

Other than the standard type annotations, TypeScript doesn’t add anything else new to methods.
```ts
class Greetings {
	sayHello(): string {
		return "Hello Universe";
	}
}
```

<br>

## Super Calls
Just as in JavaScript, if you have a base class, you’ll need to call `super()` in your constructor body before using any `this`.
```ts
class Human extends Person {
	constructor() {
		super();
		console.log(this.name);
	}
}
```
