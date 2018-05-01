const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const models = require('./models');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
models.init();

const server = http.createServer(app);

app.get('/', (req, res) => {
  return res.render('index', {title: 'xo iran'});
});
app.get('/create-game', (req, res) => {
  return res.render('pages/create-game', {categories: ['بازی ورقی', 'جنگی', 'آموزشی', 'ماجراجویی', 'تخیلی', 'علمی', 'ترسناک']});
});
app.get('/login', (req, res) => res.render('pages/login'));
app.get('/signup', (req, res) => res.render('pages/signup'));

server.listen(config.server.port, () => {
  console.log(`xoiran server is running at http://localhost:${config.server.port}`);
});
