import express from 'express';
import gatewayRoutes from './infrastructure/http/gateway.routes';

const app = express();

app.use(express.json());
app.use('/api', gatewayRoutes);

export default app;