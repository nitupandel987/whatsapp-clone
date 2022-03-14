import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    googleId: {
        type: 'string',
        required: true
    },
    imageUrl: {
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    name: {
        type: 'string',
        required: true
    },
    givenName: {
        type: 'string',
        required: true
    },
    familyName: {
        type: 'string',
        required: true
    },
    avatar: {
        type: 'string',
    }
});

export const conversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: 'string'
    }},
    {
        timestamps: true
    }
);

export const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        required: true
    },

    sender: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    }
    },
    {
        timestamps:true
    }
)