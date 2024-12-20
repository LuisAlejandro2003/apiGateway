// api-gateway/src/infrastructure/http/controllers/gateway.controller.ts
import { Request, Response } from 'express';
import { ForwardRequestUseCase } from '../../../application/use-cases/ForwardRequestUseCase';
import { AxiosGatewayServiceAdapter } from '../../adapters/AxiosGatewayAdapter';

const gatewayAdapter = new AxiosGatewayServiceAdapter();
const forwardRequestUseCase = new ForwardRequestUseCase(gatewayAdapter);

export class GatewayController {
  static async forwardToService(req: Request, res: Response) {
    try {
      console.log('Received request to Gateway with path:', req.originalUrl, 'and method:', req.method);

      let serviceUrl = '';

      // Adaptar para los nuevos microservicios
      if (req.originalUrl.startsWith('/api/v1/users')) {
        serviceUrl = 'http://localhost:3001/api/v1/users';
      } else if (req.originalUrl.startsWith('/api/v1/payments')) {
        serviceUrl = 'http://localhost:3002/api/v1/payments';
      }

      if (!serviceUrl) {
        console.error('No matching service URL found for path:', req.originalUrl);
        return res.status(404).json({ error: 'Service not found' });
      }

      console.log('Forwarding request to service URL:', serviceUrl);

      // Deja forwardPath tal como está si ya tiene la estructura correcta
      const forwardPath = req.originalUrl.replace(/^\/api\/v1\/users|\/api\/v1\/payments/, '') || '/';
      const response = await forwardRequestUseCase.execute(serviceUrl, req.method.toLowerCase(), forwardPath, req.body);

      console.log('Response from microservice:', response);

      res.json(response);
    } catch (error) {
      console.error('Error forwarding request:', error);
      res.status(500).json({ error: 'Service request failed' });
    }
  }
}
