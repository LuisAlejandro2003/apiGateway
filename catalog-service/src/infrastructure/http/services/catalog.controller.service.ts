import { GetCatalogItemsUseCase } from '../../../application/use-cases/GetCatalogItemsUseCase';
import { AddCatalogItemUseCase } from '../../../application/use-cases/AddCatalogItemUseCase';
import { MongoCatalogAdapter } from '../../adapters/MongoCatalogAdapter';
import { CatalogItem } from '../../../domain/entities/CatalogItem';
const catalogRepository = new MongoCatalogAdapter();
const getCatalogItemsUseCase = new GetCatalogItemsUseCase(catalogRepository);
const addCatalogItemUseCase = new AddCatalogItemUseCase(catalogRepository);

export class CatalogControllerService {
  async getAllItems(): Promise<CatalogItem[]> {
    return await getCatalogItemsUseCase.execute();
  }

  async addItem(id: string, name: string, price: number): Promise<void> {
    const item = new CatalogItem(id, name, price);
    await addCatalogItemUseCase.execute(item);
  }
}