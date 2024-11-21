import express from 'express';
import catalogRoutes from './infrastructure/http/catalog.routes';

const app = express();

app.use(express.json());
app.use('/api/catalog', catalogRoutes);

export default app;
