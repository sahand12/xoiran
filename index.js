const express = require('express');
const http = require('http');
const config = require('./config');
const models = require('./models');

const app = express();
models.init();

const server = http.createServer(app);

app.get('/', (req, res) => {
  return res.json({
    success: true,
  });
});

server.listen(config.server.port, () => {
  console.log(`xoiran server is running at http://localhost:${config.server.port}`);
});