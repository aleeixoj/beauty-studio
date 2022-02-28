import { User } from '@prisma/client';

import { ICreateUser } from '../dtos/IUser';

interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
}

export { IUsersRepository };
