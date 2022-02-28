import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, password_confirmed, phone, Address } =
      request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const createUser = await createUserUseCase.execute({
      name,
      email,
      password,
      password_confirmed,
      phone,
      Address,
    });

    return response.status(201).json(createUser);
  }
}
export { CreateUserController };
