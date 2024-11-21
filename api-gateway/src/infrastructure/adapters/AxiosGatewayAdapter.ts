import axios from 'axios';
import { GatewayServicePort } from '../../domain/ports/GatewayServicePort';

export class AxiosGatewayAdapter implements GatewayServicePort {
  async forwardRequest(serviceUrl: string, method: string, path: string, data: any): Promise<any> {
    try {
      const response = await axios({
        method,
        url: `${serviceUrl}${path}`,
        data,
      });
      return response.data;
    } catch (error) {
      throw new Error('Service request failed');
    }
  }
}