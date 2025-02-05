import { Router } from "express";
const router = Router();

import { getUsers, getSingleUser, createUser } from "../../controllers/userController.js";

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userID
router.route('/:userID').get(getSingleUser);

export default router;