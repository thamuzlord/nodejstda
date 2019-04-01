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

const muestraEst={
    nombre
}

const argv = require('yargs')
.command('crear','crear un estudiante',creacion)
.command('mostrar','mostrar estudiantes')
.command('mostrarEst','muestra estudiante especifico')
.argv;

module.exports = {
    argv
};