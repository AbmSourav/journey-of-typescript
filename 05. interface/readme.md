# Interfaces

An interface declaration is another way to name an object type. It's like creating a recipe.

<br>

```ts
interface Post {
	id: number
	title: string
	content: string | object
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
// result: { id: 255, title: 'Hello Universe', content: 'Content goes here' }
```

<br>

## Extend Interface
```ts
interface Car {
	brand: string | Function
	price: number
	selfDriving: boolean
}

interface Tesla extends Car {
	// wheel: string	// type error
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
// result: { brand: 'Tesla', price: 35000, selfDriving: true, electricEngin: true, model: 'Version 3' }
```

<br>

## Implementing interface
```ts
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
// result: Brand Name: Rolls Royce, Model: Ghost (sedan), and the Price is $311900.
```

<br>

## Generic Type into Interface
```ts
interface PostType<T> {
	id: number
	title: string
	content: T
}

class GetPost implements PostType<object> {
	id = 11
	title = "The World is not enough"
	content = {paragraph: '', img: ''}
}
const getPosts = new GetPost()
// getPosts.content.paragraph
```

<br>

We also can predefine the `content` type. In this example now it will only accept `object or string`.
```ts
interface PostType<T extends object|string> {
	id: number
	title: string
	content: T
}
```
