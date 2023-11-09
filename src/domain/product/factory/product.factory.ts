import Product from '../entity/product.entity';
import { v4 as uuid } from 'uuid';

export default class ProductFactory {
  static create(
    name: string,
    categoryId: string,
    image: string,
    price: number,
    serverId: string,
    id?: string,
  ): Product {
    return new Product(id || uuid(), name, categoryId, image, price, serverId);
  }
}
