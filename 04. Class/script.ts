class Person {
	name = "Sourav";
	email = "keramotul.islam@gmail.com";
	greetings(): string {
		return "Hello...";
	}
}

const person = new Person();
console.log(person.name, person.email, person.greetings());

// strict property initialization
class Car {
	constructor() {
		this.name = "BMW"
		console.log(this.name);
	}
	name: string

	model!: string
}
// new Car();
