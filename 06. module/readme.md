# Module

In TypeScript, just as in ECMAScript 2015, any file containing a top-level `import` or `export` is considered a module.

<br>

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
