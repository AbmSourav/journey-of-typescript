
// parameter type annotation
function greetings(name: string) {
	console.log("Hello, " + name.toUpperCase() + "!!");
}
greetings("Sourav")

// arrow function
const arrow = () => console.log("Hello");
arrow();

// return type annotation
function getData(): string | void {
	return console.log("Hello...");
}
getData();
