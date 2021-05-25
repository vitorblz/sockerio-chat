import http from 'http';

import ServerConfig from './config/ServerConfig';
import app from './app';
import SocketIOServer from './sockeIOServer';

app.get('/', (req, res) => {
  res.send('Ola mundo!!!');
});

const server = http.createServer(app);
SocketIOServer.start(server);

server.listen(ServerConfig.PORT, () =>
  console.log(`Servidor rodando na porta ${ServerConfig.PORT}`)
);
// SocketIOServer.start(app);
