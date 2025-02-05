import { Schema, model, Document } from 'mongoose';

interface IComment extends Document {
    author: string,
    content: string,
    createdAt: Date,
}

const commentSchema = new Schema<IComment>(
    {
        author: {
            type: String,
            default: 'USER_DEFAULT',
        },
        content: {
            type: String,
            default: 'CONTENT DEFAULT'
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
);

const Comment = model('comment', commentSchema);

export default Comment;