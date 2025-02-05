import { User } from "../models/index.js";
import { Request, Response } from "express";

//finding users
export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    };
};

export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

//creating users
export const createUser = async (req: Request, res: Response) => {
    try {
        const dbUsersData = await User.create(req.body);
        res.json(dbUsersData);
    } catch (err) {
        res.status(500).json(err);
    }
};