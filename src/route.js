const express = require('express');

const QuestionController = require('./controllers/QuestionController');

const RoomController = require('./controllers/RoomController');

const route = express.Router();

//Homepage e senhas
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }));
route.get('/create-pass', (req, res) => res.render('index', { page: 'create-pass' }));

//Rooms
route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);

//Questions
route.post('/question/create', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);

module.exports = route;
