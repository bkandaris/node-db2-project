const express = require('express');
const server = express();
const port = 4000;
const carRouter = require('./carRouter/carRouter');

server.use(express.json());
const db = require('./data/config');
server.use('/cars', carRouter);

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

module.exports = server;
