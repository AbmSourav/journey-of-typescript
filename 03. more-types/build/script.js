"use strict";
// Union Type
var data;
data = 'Hello';
data = 2021;
// data = {greetings: "Hello Universe"}	// type error
// console.log(data)
// function parameter union type
function getResponse(res) {
    console.log(res);
}
getResponse({ data: "posts" });
// array union type
var arr = [];
arr.push('Sourav');
arr.push(2021);
// enum type
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var enumType = Color.Red;
// console.log(enumType)
// never type
function errorFunc(message) {
    throw new Error(message);
}
function getPost(post) {
    console.log(post);
}
getPost({
    id: 255,
    title: 'Hello Universe',
    // content: {data: 'content'}	// type error
    content: 'Content goes here'
});
