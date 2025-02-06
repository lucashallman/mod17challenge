import { Router } from "express";
const router = Router();

import { getUsers, getSingleUser, createUser, updateUser, deleteUser } from "../../controllers/userController.js";

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userID
router.route('/:userID')
    .get(getSingleUser)
    .post(updateUser)
    .delete(deleteUser);

export default router;