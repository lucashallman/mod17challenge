import { Schema, model, Document, ObjectId } from 'mongoose';
import Thought from './Thought.js';

interface IUser extends Document {
    _id: ObjectId,
    username: string;
    thoughts: typeof Thought[],
    friends: String[]
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            default: 'USERNAME_DEFAULT'
        },
        thoughts: [Thought],
        friends: [String],
    }
)

const User = model('user', userSchema);

export default User;