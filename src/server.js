// بسم الله الرحمن الرحيم
const jsonServer = require('./json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
server.use(router)
const port=3001;
server.listen(port, () => {
    console.log(`Tdb server is up`)
});