const {argv} = require('./yargs');
const funciones = require('./funciones');

let comando = argv._[0];

switch(comando){
    case 'crear':
    funciones.crear(argv);
    break

    case 'mostrar':
    funciones.mostrar();
    break

    case 'mostrarEst':
    funciones.mostrarEst(argv.nombre);
    break

    default:
    console.log('No ingresó comando')
}