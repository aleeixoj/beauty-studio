import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { profileRoutes } from './profiles.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use(authRoutes);

export { router };
