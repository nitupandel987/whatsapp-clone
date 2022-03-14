import {Message, Conversation} from '../model/collections.js';


export const sendMessage = async (request, response) => {
    const newMessage = new Message(request.body);

    try{
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message : request.body.text});

        response.status(200).json('Message saved');
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getMessages = async(request, response) => {
    try{
        const messages = await Message.find({ conversationId: request.params.id })
        response.status(200).json(messages);
    } catch(error) {
        response.status(500).json(error);
    }
}