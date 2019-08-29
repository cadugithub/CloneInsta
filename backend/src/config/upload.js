const multer = require('multer');
const path = require('path');//configura caminhos generalizando para todos os sistemas operacionais


module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname,'..', '..', 'upload'),//__dirname é para pegar o caminho do diretorio que o arquivo upload está
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    })
};