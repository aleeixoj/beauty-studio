import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';

import { ICreateUser } from '../../dtos/IUser';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    name,
    email,
    password,
    password_confirmed,
    phone,
    Address,
  }: ICreateUser): Promise<User> {
    if (password !== password_confirmed) {
      throw new AppError(`Password doesn't match`);
    }
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('User Already exists', 500);
    }

    const hashPassword = await hash(password, 10);

    const createUser = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
      phone,
      Address,
    });

    return createUser;
  }
}
export { CreateUserUseCase };
