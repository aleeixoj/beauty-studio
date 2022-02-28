import { Router } from 'express';

import { PrismaClient } from '@prisma/client';

import { authRoutes } from './auth.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use(authRoutes);

export { router };
