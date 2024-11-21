import { CatalogItem } from '../entities/CatalogItem';

export interface CatalogRepositoryPort {
  getAllItems(): Promise<CatalogItem[]>;
  addItem(item: CatalogItem): Promise<void>;
}
