//net: Allows you to create TCP servers and clients.
const net = require('net');
const server = net.createServer(socket => {
  socket.write('Hello, client!');
  socket.on('data', data => {
    console.log('Received data:', data.toString());
  });
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});

