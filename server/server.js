const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'danny@marvel.com',
        text: 'I\'m the Iron Fist!',
        createdAt: 1138
    })

    socket.on('createMessage', (newMsg) => {
        console.log('Create Message', newMsg);
    })

    socket.on('disconnect', (socket) => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
