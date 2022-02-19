const bodyParser = require('body-parser')
const express = require('express')
const app = express() //Instância do express

//midleware será a função que será executada quando uma requisição for executada
app.use(express.static('.')) //Dentro da pasta atual, que está o server.js, todos arquivos staticos serão providos
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/*
OBS.: Versões novas do express já utiliza o middleware  de body-parse incorporado dentro de si,
para isso não use mais essa dependência. Nesse caso não precisa instalar essa dependência, basta:

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
*/

//______________________________________________________________________
//UPLOAD COM MULTER
const multer = require('multer')

//COnfiguração da pasta de destino e do nome do arquivo
const storage = multer.diskStorage({
    //Vai armazenar na pasta uploads
    destination: function (req, file, cb){
        cb(null, './upload')
    },

    //file name insere a data no nome do arquivo para que todos tenham nomes diferentes e impeça que ocorra sobrescrição
    filename: function (req, file, cb) {
        cb (null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload (req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro!')
        }
        res.end('Concluído com sucesso.')
    })
})

//_______________________________________________________________________
//POST DE FORMULÁRIO COM FETCH
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

//_______________________________________________________________________

// app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando..'))