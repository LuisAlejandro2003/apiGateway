import { GatewayServicePort } from '../../domain/ports/GatewayServicePort';

export class ForwardRequestUseCase {
  constructor(private gatewayService: GatewayServicePort) {}

  async execute(serviceUrl: string, method: string, path: string, data: any) {
    return this.gatewayService.forwardRequest(serviceUrl, method, path, data);
  }
}