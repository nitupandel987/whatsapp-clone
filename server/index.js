import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Routes from './router/Route.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routes);

const PORT = 8000;
const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;

Connection(USERNAME, PASSWORD);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));