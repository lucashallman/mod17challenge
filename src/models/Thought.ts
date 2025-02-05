import { Schema, model, Document } from 'mongoose';

import Comment from './Comment';

interface IThought extends Document {
    author: string,
    content: string,
    createdAt: Date,
    comments: typeof Comment[]
};

const thoughtSchema = new Schema<IThought>(
    {
        author: {
            type: String,
            default: 'USER_DEFAULT'
        },
        content: {
            type: String,
            default: 'CONTENT DEFAULT'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        comments: [Comment],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('getResponses')
    .get(function () {
        return this.comments.length;
    });

const Thought = model('thought', thoughtSchema)

export default Thought;