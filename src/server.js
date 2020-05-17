import express from 'express';
import http from 'http';
import middleware from './middleware/app-middleware';
import route from './route/index.route';


const app = express();

app.use(middleware);
app.use(route);

const server = http.createServer(app);

server.on('error', function(){
    process.exit(1);
});

export default server;