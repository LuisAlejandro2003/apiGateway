import { Router, Request, Response, NextFunction } from 'express';
import { GatewayController } from './controllers/gateway.controller';

const router = Router();

router.use('/api/v1/users', (req: Request, res: Response, next: NextFunction) => {
  GatewayController.forwardToService(req, res).catch(next);
});

router.use('/api/v1/payments', (req: Request, res: Response, next: NextFunction) => {
  GatewayController.forwardToService(req, res).catch(next);
});

export default router;
