import {Conversation} from '../model/collections.js';

export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    try{
        const exist = await Conversation.findOne({members: { $all: [senderId, receiverId]}});

        if (exist) {
            response.status(200).json('Conversation already exist');
            return;
        }
        else {
            const validatedConversation = new Conversation({
                members: [senderId, receiverId]
            })
    
            await validatedConversation.save();
            response.status(200).json('New convo added');
        }
        
    } catch(error) {
        response.status(500).json(error);
    }
};

export const getConversation = async (request, response) => {
    let senderId = request.body.sender;
    let receiverId = request.body.receiver;

    try {
        const conversation = await Conversation.findOne({members: { $all: [senderId, receiverId] }})
        response.status(200).json(conversation);
    } catch(error) {
        response.status(500).json(error);
    }
}