import { Router } from 'express';

import { CreateUserController } from '@modules/user/useCases/createUser/CreateUserController';
import { FindUserController } from '@modules/user/useCases/findUsers/FindUsersController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const findUserController = new FindUserController();

userRoutes.post('/create', createUserController.handle);
userRoutes.get('/getAll', findUserController.handle);

export { userRoutes };
