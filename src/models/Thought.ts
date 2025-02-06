import { Schema, model, Document, ObjectId } from 'mongoose';

interface IThought extends Document {
    _id: ObjectId;
    text?: string;
    username: string;
    comments?: string[];
};

const thoughtSchema = new Schema<IThought>(
    {
        text: String,
        username: {
          type: String,
          default: 'USER_DEFAULT',
        },
        comments: [{ type: String, ref: 'comment' }],
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