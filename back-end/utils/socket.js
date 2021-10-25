module.exports = (io) => io.on('connection', (socket) => {
  socket.on('message', ({ name, message }) => {
    console.log(name, message);
  });
});
