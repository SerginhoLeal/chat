const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UserController');
const MUController = require('./controllers/MUController');
const SendController = require('./controllers/MsgController');

routes.get('/PwYlN8StfLi85cbsOs9z', UsuarioController.index);
routes.post('/PwbsOs9YtfLi85clN8Sz', UsuarioController.login);
routes.post('/NRBQlog6f2Pwnqe3adQJ', UsuarioController.store);
routes.put('/NRBQdQlog6f2Pwnqe3aJ/:id', UsuarioController.update);

routes.get('/N8StfLisOs9z85cbPwYl', MUController.index);
routes.post('/OTT7RrH1TRC7Ypo2iYtR', MUController.login);
routes.post('/C7Ypo2iFU0OTT7RrH1TR', MUController.store);

routes.post('/GdXLWUFQwwAm927q/:idDel/se2Y4bkhAHMxPLRX', SendController.store);

module.exports = routes;