const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http:/localhost:3001',
    methods: ['GET', 'POST']
  }
});

require('./utils/socket')(io);

app.get('/', () => console.log('Ok'))

http.listen(3001, () => {
  console.log('Online na 3001')
})