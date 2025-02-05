import { Router } from "express";
const router = Router();

import userRoutes from './userRoutes.js';
import thoughtRoutes from './thoughtRoutes.js';
import commentRoutes from './commentRoutes.js';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/comments', commentRoutes);

export default router;