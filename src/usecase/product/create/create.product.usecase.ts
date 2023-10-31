import ProductFactory from '../../../domain/product/factory/product.factory';
import ProductRepositoryInterface from '../../../domain/product/repositories/product.repository.interface';
import UseCaseInterface from '../../../shared/usecase.interface';
import { InputCreateProductDto, OutputCreateProductDto } from './create.product.dto';

export default class CreateProductUseCase
  implements UseCaseInterface<InputCreateProductDto, OutputCreateProductDto>
{
  constructor(private productRepository: ProductRepositoryInterface) {}

  async execute(input: InputCreateProductDto): Promise<OutputCreateProductDto> {
    const product = ProductFactory.create(input.name, input.image, input.price, input.serverId);
    await this.productRepository.create(product);

    return {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      serverId: product.serverId,
    };
  }
}
