import { Request, Response } from 'express';
import { CatalogControllerService } from '../services/catalog.controller.service';


const catalogControllerService = new CatalogControllerService();

export class CatalogController {
  static async getAllItems(req: Request, res: Response) {
    try {
      const items = await catalogControllerService.getAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async addItem(req: Request, res: Response) {
    try {
      const { id, name, price } = req.body;
      await catalogControllerService.addItem(id, name, price);
      res.status(201).json({ message: 'Item added successfully' });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}