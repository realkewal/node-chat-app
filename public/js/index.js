var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'matt@marvel.com',
        text: "I am the devil of Hell's Kitchen!"
    })
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});


socket.on('newMessage', (msg) => {
    console.log('New Message received: ', msg);
})

