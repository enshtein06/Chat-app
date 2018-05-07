var socket = io();

socket.on('connect', function(){
	console.log('Connected to server!');
	socket.emit('createMessage', {
		from: 'jen@example.com',
		text: 'Hey this is Askhat',
		createdAt: 123
	});
})
socket.on('disconnect', function(){
	console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log(message);
});