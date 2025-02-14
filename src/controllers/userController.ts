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
        const user = await User.findById(req.params.userId);
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

//updating user

export const updateUser = async (req: Request, res: Response) => {
    try {
        if (req.params.type == 'username') {

            await User.findOneAndUpdate (
                { _id: req.body.userID },
                { username: req.body.newUsername }
            )

        } else if (req.params.type === 'addFriend') {

            await User.findOneAndUpdate(
                { _id: req.body.userID },
                { $push: { friends: req.body.friendID} },
                { new: true }
            )

        } else if (req.params.type === 'removeFriend') {
            const exfriend = req.body.friendID
            const user = await User.findOne(req.body.userID);

            if (user) {
                const friendsList = user.friends;
                for (let i = 0; i < friendsList.length; i++) {
                    if (friendsList[i] === exfriend) {
                        const newList = friendsList.splice(i, 1)
                        await User.findOneAndUpdate(
                            {_id: req.body.userID},
                            {friends: newList}
                        )
                        res.json({ message: 'Friend removed.'})
                    }
                }
            }
        }
    //   await User.findOneAndUpdate(
    //     { _id: req.body.userID },
    //     { text: req.body.newText }
    //   )
    //   res.json({ message: 'User updated' });
    } catch (err) {
      res.status(500).json(err)
    }
  };
  
  //deleting user
  
  export const deleteUser = async (req: Request, res: Response) => {
    try {
      await User.deleteOne({ _id: req.body.userId });
      res.json({ message: 'Comment deleted.' });
    } catch (err) {
      res.status(500).json(err);
    }
  }