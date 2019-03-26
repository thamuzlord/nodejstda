const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles
    }
    listaEstudiantes.push(est);
    guardar();   
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json',datos,(err) =>{
        if (err) throw (err);
        console.log('creado');        
    })
}

module.exports = {
    crear
}