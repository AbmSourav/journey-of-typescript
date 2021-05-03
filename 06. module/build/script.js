"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var greetings_js_1 = __importDefault(require("./greetings.js"));
var greetings_js_2 = require("./greetings.js");
greetings_js_1.default();
new greetings_js_2.Person();
var getData = function (res) {
    console.log(res.code, res.message);
};
getData({ code: 200, message: 'OK' });
