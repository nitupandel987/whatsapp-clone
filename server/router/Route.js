import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer'

// controllers
import { addUser, fetchUsers } from '../controller/UserController.js';
import { newConversation, getConversation } from '../controller/ConversationController.js';
import { sendMessage, getMessages } from '../controller/MessageController.js';

const route = express.Router();

//use express static folder
route.use(express.static("./public"))
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});

route.post('/create-account', addUser);
route.get('/users', fetchUsers);
route.post('/conversations/add', newConversation);
route.post('/conversations/fetch', getConversation);
route.post('/messages/send', sendMessage);
route.get('/messages/fetch/:id', getMessages)

route.post("/profile-photo-upload", upload.single('image'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
        // var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
        // db.query(insertData, [imgsrc], (err, result) => {
        //     if (err) throw err
        //     console.log("file uploaded")
        }
    }
);

export default route;