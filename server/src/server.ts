import { Server } from 'socket.io';
import http from 'http';

import ServerConfig from './config/ServerConfig';
import app from './app';

app.get('/', (req, res) => {
  res.send(`Ola mundo!!!`);
});

const server = http.createServer(app);

server.listen(ServerConfig.PORT, () =>
  console.log(`Servidor rodando na porta ${ServerConfig.PORT}`)
);

const io = new Server(server);

io.on('connect', (socket) => {
  console.log(`connect ${socket.id}`);

  socket.on('ping', (cb) => {
    console.log('ping');
    cb();
  });

  socket.on('disconnect', () => {
    console.log(`disconnect ${socket.id}`);
  });
});
