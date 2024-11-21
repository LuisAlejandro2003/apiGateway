import { Request, Response } from 'express';
import { ForwardRequestUseCase } from '../../../application/use-cases/ForwardRequestUseCase';
import { AxiosGatewayAdapter } from '../../adapters/AxiosGatewayAdapter';

const gatewayAdapter = new AxiosGatewayAdapter();
const forwardRequestUseCase = new ForwardRequestUseCase(gatewayAdapter);

export class GatewayController {
  static async forwardToService(req: Request, res: Response) {
    try {
      const serviceUrl = req.path.startsWith('/catalog')
        ? 'http://localhost:3001'
        : 'http://localhost:3002';
      const response = await forwardRequestUseCase.execute(serviceUrl, req.method, req.path, req.body);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
