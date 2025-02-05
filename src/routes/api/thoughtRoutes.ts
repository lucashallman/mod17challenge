import { Router } from "express";
const router = Router();

import { getThoughts, getSingleThought, createThought } from '../../controllers/thoughtController.js';

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtID
router.route('/:thoughtID').get(getSingleThought);

export default router