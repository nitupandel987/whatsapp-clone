import mongoose from 'mongoose';

// schemas
import {userSchema, conversationSchema, messageSchema} from './schema.js';

export const User = mongoose.model('user', userSchema);

export const Conversation = mongoose.model('conversation', conversationSchema);

export const Message = mongoose.model('message', messageSchema);