const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); 

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); //listar todas as ONGs
routes.post('/ongs', OngController.create); // cadastro de ONGs

routes.get('/profile', ProfileController.index); //listas casos especificos de uma ong

routes.get('/incidents', IncidentController.index); //listas casos
routes.post('/incidents', IncidentController.create); //criar casos
routes.delete('/incidents/:id', IncidentController.delete); //deletar casos

module.exports = routes;