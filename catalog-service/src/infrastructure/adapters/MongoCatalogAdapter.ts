import { CatalogRepositoryPort } from '../../domain/ports/CatalogRepositoryPort';
import { CatalogItem } from '../../domain/entities/CatalogItem';
import { db } from './persistence/mongodb';
import { ObjectId } from 'mongodb';

export class MongoCatalogAdapter implements CatalogRepositoryPort {
  private collection = db.collection('catalogItems');

  async getAllItems(): Promise<CatalogItem[]> {
    const items = await this.collection.find().toArray();
    return items.map(item => new CatalogItem(item._id.toString(), item.name, item.price));
  }

  async addItem(item: CatalogItem): Promise<void> {
    await this.collection.insertOne({ _id: new ObjectId(item.id), name: item.name, price: item.price });
  }
}