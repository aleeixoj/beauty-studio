import { prisma } from 'database/prismaClient';

import { ICreateUser } from '@modules/user/dtos/IUser';
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';
import { User } from '@prisma/client';

class UsersRepository implements IUsersRepository {
  async create({
    name,
    email,
    password,
    phone,
    Address,
  }: ICreateUser): Promise<User> {
    const createdUser = await prisma.user.create({
      data: { name, email, password, phone, Address: { create: Address } },
      include: { Address: true },
    });

    return createdUser;
  }
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({ include: { Address: true } });
    return users;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }
}

export { UsersRepository };
