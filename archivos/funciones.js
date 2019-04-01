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

module.exports = {
    crear,
    mostrar,
    mostrarEst
}