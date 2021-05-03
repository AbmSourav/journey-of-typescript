import hello from './greetings.js';
import {Person as Sourav} from './greetings.js';
import type {Response} from './greetings.js';

hello();
new Sourav();

const getData = (res: Response) => {
	console.log(res.code, res.message);
}
getData({code: 200, message: 'OK'})
