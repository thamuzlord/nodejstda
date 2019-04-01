const nombre = {
    demand : true,
    alias : 'n'
}

const matematicas = {
    demand : true,
    alias : 'm'
}

const ingles = {
    demand : true,
    alias : 'i'
}

const creacion = {
    nombre,
    matematicas,
    ingles
}

const muestrarEst={
    nombre
}

const actualiza = {
    nombre,
    asignatura : {
        demand: true,
        alias: 'a'
    },
    calificacion : {
        demand : true,
        alias: 'c'
    }
}

const argv = require('yargs')
.command('crear','crear un estudiante',creacion)
.command('mostrar','mostrar estudiantes')
.command('mostrarEst','muestra estudiante especifico',muestrarEst)
.command('actualizar','Actualiza la informacion',actualiza)
.argv;

module.exports = {
    argv
};