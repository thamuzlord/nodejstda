const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
 
const directoriopublico = path.join(__dirname,'../public');
app.use(express.static(directoriopublico));

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('index', {
        estudiante: 'Vasco'
    })
});

 
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');    
});