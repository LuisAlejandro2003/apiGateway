import { Router, Request, Response, NextFunction } from 'express';
import { GatewayController } from './controllers/gateway.controller';

const router = Router();

router.use('/api/catalog', (req: Request, res: Response, next: NextFunction) => {
  GatewayController.forwardToService(req, res).catch(next);
});

router.use('/shopping-cart', (req: Request, res: Response, next: NextFunction) => {
  GatewayController.forwardToService(req, res).catch(next);
});

export default router;
