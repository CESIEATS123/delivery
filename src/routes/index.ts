import { Router } from 'express';
import deliveriesRoutes from './api/deliveries.routes';
const routes = Router();

routes.use('/deliveries', deliveriesRoutes);

export default routes;