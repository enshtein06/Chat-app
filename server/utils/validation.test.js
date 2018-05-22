const expect = require('expect');

const {isRealString} = require('./validation');
// import isRealString

describe('isRealString', () => {
	it('Should reject non-string values', () => {
		var nonStr = 412;
		expect(isRealString(nonStr)).toBe(false);
	});
	it('Should reject str with only spaces', () => {
		var nonStr = '         ';
		expect(isRealString(nonStr)).toBe(false);
	});
	it('Should allow str with non-space characters', () => {
		var str = "412";
		expect(isRealString(str)).toBe(true);
	});
});
