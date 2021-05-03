# Module

In TypeScript, just as in ECMAScript 2015, any file containing a top-level `import` or `export` is considered a module.

<br>

## Default Export
Here I'm exporting a function from `greetings.ts` file. Now It's available to `import` from other files.
```ts
// file: greetings.ts
export default function hello(): void {
	console.log("Hello Universe");
}
```

<br>

Now from `script.ts` file let's import that `hello` function and run `tsc` to compile TypeScript to JavaScript. After compiling the code check the *build* folder. You will find `greetings.js` and `script.js` files. That's why we are *importing* `greetings.js` insted of `greetings.ts`

```ts
import hello from './greetings.js';

hello();
```

<br>

## Import with Destructuring
You also can export without `default` keyword. In that case you need to import with *object destructuring*.
```ts
// file: greetings.ts
export class Person {
	constructor() {
		console.log("I'm Sourav...");
	}
}

// file: script.ts
import {Person} from './greetings.js';
```

<br>

## Alias
You can add *alias* while importing anything. It can be very helpful when you're importing different libraries with same name.
```ts
import {Person as Sourav} from './greetings.js';
```

<br>

## Import Types
TypeScript has extended the `import` syntax with `import type`. It can only import types.
```ts
export type Response = { code: number; message: string };


import {Response} from './filename.js';
const getData = (res: Response) => {
	console.log(res.code, res.message);
}
getData({code: 200, message: 'OK'})
```