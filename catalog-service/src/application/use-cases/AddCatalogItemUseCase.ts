import { CatalogRepositoryPort } from '../../domain/ports/CatalogRepositoryPort';
import { CatalogItem } from '../../domain/entities/CatalogItem';

export class AddCatalogItemUseCase {
  constructor(private catalogRepository: CatalogRepositoryPort) {}

  async execute(item: CatalogItem): Promise<void> {
    return this.catalogRepository.addItem(item);
  }
}