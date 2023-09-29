import ServerOwnerFacture from '../../../domain/serverOwner/factory/serverOwner.factory';
import ServerOwnerRepositoryInterface from '../../../domain/serverOwner/repositories/serverOwner.repository.interface';
import UseCaseInterface from '../../../shared/usecase.interface';
import { InputCreateServerOwnerDto, OutputCreateServerOwnerDto } from './create.serverOwner.dto';

export default class CreateServerOwnerUseCase
  implements UseCaseInterface<InputCreateServerOwnerDto, OutputCreateServerOwnerDto>
{
  private ServerOwnerRepository: ServerOwnerRepositoryInterface;

  constructor(ServerOwnerRepository: ServerOwnerRepositoryInterface) {
    this.ServerOwnerRepository = ServerOwnerRepository;
  }

  async execute(input: InputCreateServerOwnerDto): Promise<OutputCreateServerOwnerDto> {
    const serverOwner = ServerOwnerFacture.create(input.name, input.email, input.password);
    await this.ServerOwnerRepository.create(serverOwner);

    return {
      serverOwnerId: serverOwner.serverOwnerId,
      name: serverOwner.name,
      email: serverOwner.email,
    };
  }
}
