const express = require('express'); //importanto um pacote (modulo express)
const routes = require('./routes'); //importanto uma variável que está na mesma pasta que o arquivo de destino
const cors = require('cors');


const app = express(); //criação da aplicação

app.use(cors());
app.use(express.json()); //informa que a aplicação está usando o módulo json do pacote Express
app.use(routes); //informa que 


app.listen(3333); //define que a aplicação "ouvirá" a porta 3333
