
// Union Type
let data: number | string
data = 'Hello'
data = 2021
// data = {greetings: "Hello Universe"}	// type error
// console.log(data)

// function parameter union type
function getResponse(res: object | null) {
	console.log(res)
}
getResponse({data: "posts"})

// array union type
let arr: (string | number)[] = []
arr.push('Sourav')
arr.push(2021)


// enum type
enum Color {
	Red = 'red',
	Green = 'green',
	Blue = 'blue',
}
let enumType: Color = Color.Red;
// console.log(enumType)


// never type
function errorFunc(message: string): never {
	throw new Error(message);
}
// errorFunc('Error Message')
