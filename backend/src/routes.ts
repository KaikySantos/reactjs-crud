import express from 'express';
import UsersController from './controllers/UsersController';
import db from './database/connection';

const routes = express.Router();
const classesControllers = new UsersController();

routes.get('/users', classesControllers.read);
routes.post('/users', classesControllers.create);
routes.delete('/users/:id', classesControllers.delete);
routes.put('/users/:id', classesControllers.update);

export default routes;