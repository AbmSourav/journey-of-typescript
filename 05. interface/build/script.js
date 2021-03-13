"use strict";
function getPost(post) {
    console.log(post);
}
getPost({
    id: 255,
    title: 'Hello Universe',
    // content: {data: 'content'}	// type error
    content: 'Content goes here'
});
function getTesla(tesla) {
    console.log(tesla);
}
getTesla({
    brand: 'Tesla',
    price: 35000,
    selfDriving: true,
    electricEngin: true,
    model: 'Version 3',
});
// Implementing interface
var RollsRoyce = /** @class */ (function () {
    function RollsRoyce(model) {
        this.model = model;
        this.brand = function () { return 'Brand Name: Rolls Royce'; };
        this.price = 311900;
        this.selfDriving = true;
        this.features();
    }
    RollsRoyce.prototype.features = function () {
        console.log(this.brand() + ", Model: " + this.model + ", and the Price is $" + this.price + ".");
    };
    return RollsRoyce;
}());
new RollsRoyce("Ghost (sedan)");
// const post: PostType<object> = {
// 	id: 11,
// 	title: "Hi There",
// 	content: {text: '', img: ''}
// }
var GetPost = /** @class */ (function () {
    function GetPost() {
        this.id = 11;
        this.title = "Hi There";
        this.content = { paragraph: '', img: '' };
    }
    return GetPost;
}());
var getPosts = new GetPost();
// getPosts.content.paragraph
