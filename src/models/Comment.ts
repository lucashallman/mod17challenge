import { Schema, model, Document, ObjectId } from 'mongoose';

interface IComment extends Document {
    _id: ObjectId;
    text?: string;
    username?: string;
}

const commentSchema = new Schema<IComment>(
    {
        text: String,
        username: String,
    }
);

const Comment = model('comment', commentSchema);

export default Comment;