import { Router } from 'express';
import { GatewayController } from './controllers/gateway.controller';

const router = Router();

router.use('/catalog', GatewayController.forwardToService);
router.use('/shopping-cart', GatewayController.forwardToService);

export default router;
