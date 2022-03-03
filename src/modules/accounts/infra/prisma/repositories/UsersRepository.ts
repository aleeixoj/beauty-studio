import { prisma } from 'database/prismaClient';

import { ICreateUser } from '@modules/accounts/dtos/IUser';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';

class UsersRepository implements IUsersRepository {
  async create({
    name,
    email,
    password,
    phone,
    Address,
    profileId,
  }: ICreateUser): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        phone,
        Address: { create: Address },
        profileId,
      },
      include: {
        Address: true,
        profile: { include: { resources: true } },
      },
    });

    return createdUser;
  }
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });
    return user;
  }
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({
      include: { Address: true, profile: { include: { resources: true } } },
    });
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
