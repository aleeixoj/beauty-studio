import { container } from 'tsyringe';
import '@shared/container/providers';

import { ProfileRepository } from '@modules/accounts/infra/prisma/repositories/ProfileRepository';
import { ResourcesRepostiry } from '@modules/accounts/infra/prisma/repositories/ResourcesRepository';
import { UsersRepository } from '@modules/accounts/infra/prisma/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/accounts/infra/prisma/repositories/UsersTokensRepository';
import { IProfileRepository } from '@modules/accounts/repositories/IProfileRepository';
import { IResourcesRepository } from '@modules/accounts/repositories/IResourcesRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository
);

container.registerSingleton<IProfileRepository>(
  'ProfileRepository',
  ProfileRepository
);

container.registerSingleton<IResourcesRepository>(
  'ResourcesRepository',
  ResourcesRepostiry
);
