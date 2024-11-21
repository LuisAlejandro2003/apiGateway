import { CatalogRepositoryPort } from '../../domain/ports/CatalogRepositoryPort';
import { CatalogItem } from '../../domain/entities/CatalogItem';

export class GetCatalogItemsUseCase {
  constructor(private catalogRepository: CatalogRepositoryPort) {}

  async execute(): Promise<CatalogItem[]> {
    return this.catalogRepository.getAllItems();
  }
}