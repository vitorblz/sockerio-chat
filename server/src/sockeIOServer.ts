import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';

export default class SocketIOServer {
  static start(server: HttpServer) {
    const io = new Server(server, {
      cors: {
        origin: ['http://localhost:3002'],
      },
    });

    io.on('connect', (socket) => {
      console.log(`connect ${socket.id}`);

      socket.on('ping', (cb) => {
        console.log('ping');
        cb();
      });

      socket.on('hello', (data) => {
        console.log(`hello from ${socket.id}`);
      });

      socket.on('disconnect', () => {
        console.log(`disconnect ${socket.id}`);
      });
    });
  }
}
