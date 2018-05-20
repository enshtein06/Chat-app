var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('Should generate correct message object', () => {
		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	})
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'User';
		var url = {lat: 1, long: 1};
		var message = generateLocationMessage(from, url.lat, url.long);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from,
			url: "https://www.google.com/maps?q=1,1"
		});
	});
});