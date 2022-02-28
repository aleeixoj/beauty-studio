import { Router } from 'express';

import { PrismaClient } from '@prisma/client';

import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);

export { router };
