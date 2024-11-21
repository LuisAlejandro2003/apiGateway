import { Router } from 'express';
import { CatalogController } from './controllers/catalog.controller';

const router = Router();

router.get('/', CatalogController.getAllItems);
router.post('/', CatalogController.addItem);

export default router;