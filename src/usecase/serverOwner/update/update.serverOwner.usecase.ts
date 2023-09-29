import ServerOwnerRepositoryInterface from '../../../domain/serverOwner/repositories/serverOwner.repository.interface';
import UseCaseInterface from '../../../shared/usecase.interface';
import { InputUpdateServerOwnerDto, OutputCreateServerOwnerDto } from './update.serverOwner.dto';

export default class UpdateServerOwnerUseCase
  implements UseCaseInterface<InputUpdateServerOwnerDto, OutputCreateServerOwnerDto>
{
  private ServerOwnerRepository: ServerOwnerRepositoryInterface;

  constructor(ServerOwnerRepository: ServerOwnerRepositoryInterface) {
    this.ServerOwnerRepository = ServerOwnerRepository;
  }

  async execute(input: InputUpdateServerOwnerDto): Promise<OutputCreateServerOwnerDto> {
    const serverOwner = await this.ServerOwnerRepository.find(input.serverOwnerId);
    serverOwner.changeName(input.name);

    await this.ServerOwnerRepository.update(serverOwner);

    return {
      serverOwnerId: serverOwner.serverOwnerId,
      name: serverOwner.name,
      email: serverOwner.email,
      serverId: serverOwner.serverId,
    };
  }
}
