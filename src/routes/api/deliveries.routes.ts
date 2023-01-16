import { Router } from 'express';
import * as controllers from '../../controllers/deliveries.controllers';

const routes = Router();
// api/roles
routes.route('/all').get(controllers.all);
routes.route('/createDelivery').post(controllers.create);
routes.route('/findOne/:id').get(controllers.findOne);
routes.route('/updateOne/:id').patch(controllers.updateOne);
routes.route('/updateStatus/:id').patch(controllers.updateStatus);
routes.route('/deliveryDelivred/:id').patch(controllers.deliveyDelivred);


export default routes;