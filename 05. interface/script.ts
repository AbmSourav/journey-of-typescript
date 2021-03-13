
// Interfaces
interface Post {
	id: number
	title: string
	content: string
}

function getPost(post: Post) {
	console.log(post);
}
getPost({
	id: 255,
	title: 'Hello Universe',
	// content: {data: 'content'}	// type error
	content: 'Content goes here'
})

// extends
interface Car {
	brand: string | Function
	price: number
	selfDriving: boolean
}

interface Tesla extends Car {
	// brand: object	// type error
	model: string | number
	electricEngin: boolean
}

function getTesla(tesla: Tesla) {
	console.log(tesla);
}
getTesla({
	brand: 'Tesla',
	price: 35000,
	selfDriving: true,
	electricEngin: true,
	model: 'Version 3',
})

// Implementing interface
class RollsRoyce implements Car {
	constructor(public model: string) {
		this.features()
	}

	brand: Function = () => 'Brand Name: Rolls Royce';

	price: number = 311900;

	selfDriving: boolean = true;

	features() {
		console.log(`${this.brand()}, Model: ${this.model}, and the Price is $${this.price}.`);
	}
}
new RollsRoyce("Ghost (sedan)");


// generic type into interface
interface PostType<T extends object|string> {
	id: number
	title: string
	content: T
}
// const post: PostType<object> = {
// 	id: 11,
// 	title: "Hi There",
// 	content: {text: '', img: ''}
// }

class GetPost implements PostType<object> {
	id = 11
	title = "Hi There"
	content = {paragraph: '', img: ''}
}
const getPosts = new GetPost()
// getPosts.content.paragraph
