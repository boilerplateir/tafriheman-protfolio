import express from 'express';

import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import productRoutes from './product.routes';

const router = express.Router(); // eslint-disable-line new-cap
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/products', productRoutes);

export default router;