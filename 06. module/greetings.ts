export default function hello(): void {
	console.log("Hello Universe");
}

export class Person {
	constructor() {
		console.log("I'm Sourav...");
	}
}

export type Response = { code: number; message: string };
