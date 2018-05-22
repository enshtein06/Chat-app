const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;
	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		}, {
			id: '2',
			name: 'Jen',
			room: 'React Course'
		}, {
			id: '3',
			name: 'Askhat',
			room: 'Node Course'
		}];
	});
	it('Should add new user', () => {
		var users = new Users();
		var user = users.addUser('1', 'Askhat', 'Fanny');

		expect(users.users).toEqual([{id: '1', name: 'Askhat', room: "Fanny"}]);
	});

	it('Should return name for node course', () => {
		var usersList = users.getUserList('Node Course');

		expect(usersList).toEqual(['Mike','Askhat']);
	});
	it('Should return name for React course', () => {
		var usersList = users.getUserList('React Course');

		expect(usersList).toEqual(['Jen']);
	});

	it('Should return name by id', () => {
		var user = users.getUser('1');
		expect(user.id).toEqual('1');
	});
	it('Should not return name by incorrect id', () => {
		var user = users.getUser('99');
		expect(user).toNotExist();
	});
	it('Should remove user', () => {
		var userId = '1';
		var user = users.removeUser(userId);
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});
	it('Should not remove user', () => {
		var userId = '99';
		var user = users.removeUser(userId);
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});
})