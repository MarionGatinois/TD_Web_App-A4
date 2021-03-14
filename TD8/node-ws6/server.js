var express = require('express');
var app = express();


const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));



io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('drawing', message => {
    console.log('message',message)
    io.emit('drawing', message);
  });
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
