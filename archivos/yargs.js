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

const argv = require('yargs')
.command('crear','crear un estudiante',creacion)
.argv;

module.exports = {
    argv
};