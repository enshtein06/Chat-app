const moment = require('moment');

var date = moment();
date.add(100, 'year').subtract(9, 'months');

console.log(date.format('MMM Do YYYY hh:mm:ss a'));

var createdAt = 1234;
var dateA = moment(createdAt);
console.log(dateA);

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp)


/*const date = new Date();

console.log(date.getSeconds());

setTimeout(() => {
	console.log(date.getSeconds());
	console.log(new Date().getSeconds());
}, 5000);*/