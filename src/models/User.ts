import { Schema, model, Document, ObjectId } from 'mongoose';

interface IUser extends Document {
    _id: ObjectId,
    username: string;
    thoughts: ObjectId[],
    friends: String[]
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            default: 'USERNAME_DEFAULT'
        },
        thoughts: [Schema.Types.ObjectId],
        friends: [String],
    }
)

const User = model('user', userSchema);

export default User;