const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); 

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); //listar todas as ONGs
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2), 
    })
}), OngController.create); // cadastro de ONGs

routes.get('/profile',  ProfileController.index); //listas casos especificos de uma ong

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page:  Joi.number(),
    }),
}), IncidentController.index); //listas casos

routes.post('/incidents', IncidentController.create); //criar casos

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:  Joi.number().required(),
    }),
}),IncidentController.delete); //deletar casos

module.exports = routes;