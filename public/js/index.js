var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('New Message received: ', message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    $('#messages').append(li);
});

socket.on('newLocationMessage', (message) => {
    var li = $('<li></li>');
    var a = $('<a target="_blank">My current location</a>')
    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    $('#messages').append(li);
});


$('#message-form').on('submit', (e) => {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'Frank',
        text: $('[name=message]').val()
    }, () => {

    });
});

const locationButton = $('#send-location');
locationButton.on('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser!');
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, () => {
        alert('Unable to fetch location!');
    })
});