import mongoose from 'mongoose';
import dotenv from 'dotenv';

const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.ktmii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL);
        console.log('database connected')
    } catch (error) {
        console.log('error connecting to db', error);
    }
};

export default Connection;