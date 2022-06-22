// بسم الله الرحمن الرحيم
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const port=3001;
server.use(router);
server.listen(port);