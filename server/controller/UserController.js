import { User } from '../model/collections.js';

export const addUser = async (request, response) => {
    try {

        let exist = await User.findOne({googleId: request.body.googleId});

        if (exist) {
            response.status(400).json('User exist')
        }
        else {
            const newUser = new User(request.body);
            await newUser.save();
            response.status(200).json('User created');
        }
        
    } catch (error) {
        response.status(500).json(error);
    }
};

export const fetchUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json(error);
    }
}