const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers');
 
const dirNode_modules = path.join(__dirname , '../node_modules')
const directoriopublico = path.join(__dirname,'../public');
const directoriopartials = path.join(__dirname,'../partials');
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({extended:false}));
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/css', express.static(dirNode_modules + '/font-awesome/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('index', {
        estudiante: 'Vasco'
    })
});

app.post('/calculos',(req,res)=>{
    res.render('calculos',{
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)
    });
});

app.get('/listarCursos',(req,res)=>{
    res.render('listarCursos',{
        titulo: 'Listar cursos'
    });
});

app.get('/crearCurso',(req,res)=>{
    res.render('crearCurso',{
        titulo: 'Crear cursos'
    });
});

app.post('/registrarCurso',(req,res)=>{
    res.render('registrarCurso',{
        idCurso: req.body.id,
        nombreCompleto: req.body.nombre,
        modalidad: req.body.modalidad,
        valor: req.body.valor,
        descripcion: req.body.descripcion,
        intensidadHoraria: req.body.intensidad,
        estado: true  
    });
});
 
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');    
});

app.get('*',(req,res) => {
    res.render('error', {
        estudiante: 'error'
    });
});