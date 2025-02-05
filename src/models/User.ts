import { Schema, model, Document } from 'mongoose';
import Thought from './Thought';

interface IUser extends Document {
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