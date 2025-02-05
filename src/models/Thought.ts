import { Schema, model, Document, ObjectId } from 'mongoose';

import Comment from './Comment';

interface IThought extends Document {
    _id: ObjectId;
    text?: string;
    username?: string;
    comments?: Comment[];
};

const thoughtSchema = new Schema<IThought>(
    {
        text: String,
        username: String,
        comments: [{ type: [Comment], ref: 'comment' }],
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

thoughtSchema
    .virtual('totalComments')
    .get(function () {
        return this.comments?.length;
    });

const Thought = model('thought', thoughtSchema)

export default Thought;