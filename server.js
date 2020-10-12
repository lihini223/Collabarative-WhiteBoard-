const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('cordinates', (data) =>{
        socket.broadcast.emit('cordinates', data);
    });
});

server.listen(3000);