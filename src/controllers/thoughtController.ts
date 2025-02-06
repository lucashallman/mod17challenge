import { Thought } from "../models/index.js";
import { Request, Response } from "express";

// finding thoughts

export const getThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getSingleThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOne({_id: (req.params.thoughtId)});

        if (!thought) {
            res.status(404).json({ message: 'No Thought with that id'});
        } else {
            res.json(thought);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


//creating thoughts

export const createThought = async (req: Request, res: Response) => {
    try {
        const dbThoughtsData = await Thought.create(req.body);
        res.json(dbThoughtsData);
    } catch (err) {
        res.status(500).json(err);
    }
}

//updating thoughts

export const updateThought = async (req: Request, res: Response) => {
    try {
      await Thought.findOneAndUpdate(
        { _id: req.body.commentID },
        { text: req.body.newText }
      )
      res.json({ message: 'Thought updated' });
    } catch (err) {
      res.status(500).json(err)
    }
  };
  
  //deleting comments
  
  export const deleteThought = async (req: Request, res: Response) => {
    try {
      await Thought.deleteOne({ _id: req.body.commentId });
      res.json({ message: 'Thought deleted.' });
    } catch (err) {
      res.status(500).json(err);
    }
  };