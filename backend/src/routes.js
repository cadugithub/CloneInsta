const express = require("express");
const multer = require('multer');// Multer é usado para trabalhar com arquivos json
const uploadConfig = require('./config/upload')

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

/*routes.post('/posts',(req,res)=>{//O middleware é essa funcão
    //return res.send('Hello, world');//sempre que for preciso devolver uma resposta deve-se usar o rest
    return res.send(`olá, ${req.query.name}`);//${} é para usar variáveis dentro de aspas
});*/
const routes = new express.Router();
const upload = multer(uploadConfig);
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'),PostController.store);

routes.post('/posts/:id/like', LikeController.store);//Quero dar like no post

module.exports = routes;