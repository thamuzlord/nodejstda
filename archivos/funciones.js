const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles
    }
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
    if (!duplicado) {
        listaEstudiantes.push(est);
        guardar();
    }else{
        console.log('Ya existe otro estudiante con ese nombre');        
    }
}

const listar = () => {
    try{
        listaEstudiantes = require('./listado.json')
    }catch(error){
        listaEstudiantes = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json',datos,(err) =>{
        if (err) throw (err);
        console.log('creado');        
    })
}

const mostrar = () => {
    listar();
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas');
        console.log(estudiante.matematicas);     
    })
}

const mostrarEst = (nom) => {
    listar();
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
    if (!est) {
        console.log('No existe el estudiante');        
    }else{
        console.log(est.nombre);
        console.log('Matematicas');
        console.log(est.matematicas);
        console.log('Ingles');
        console.log(est.ingles);
    }
}

const mostrarMat = () =>{
    listar();
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3 )
    if (ganan.length == 0){
        console.log('Ningun estudiante va ganando');
    }else{
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('notas');
            console.log(estudiante.matematicas);     
        })
    }
}

const actualizar = (nom, asignatura, calificacion) =>{
    listar();
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
    if (!est) {
        console.log('No existe el estudiante');        
    }else{
        est[asignatura] = calificacion;
        guardar();
    }
}

const eliminar = (nom) => {
    listar();
    let nuevo = listaEstudiantes.filter(mat => mat.nombre != nom );
    if (nuevo.length == listaEstudiantes.length){
        console.log('Ningun estudiante tiene el nombre indicado');
    }else{
        listaEstudiantes = nuevo;
        guardar();
    }
}

module.exports = {
    crear,
    mostrar,
    mostrarEst,
    mostrarMat,
    actualizar,
    eliminar
}