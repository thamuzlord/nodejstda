const {estudiante,obtenerPromedio} = require ('./calculos');
const fs = require('fs');

console.log("El nombre del estudiante es: " +estudiante.nombre);
console.log("Promedio:" +obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));

let  {nombre, edad : anos, notas: {matematicas,ingles,programacion}} = estudiante;
console.log("el nombre del estudiante es:" +nombre);
console.log(obtenerPromedio(matematicas,ingles,programacion));
console.log("edad: " +anos);

let crearArchivo = (estudiante) => {
    texto = 'el nombre del estudiante es: ' +estudiante.nombre + '\n' +
            'promedio: ' +obtenerPromedio(matematicas,ingles,programacion);
    fs.writeFile('promedio.txt',texto,(err) => {
        if(err) throw (err);
        console.log("Archivo creado");
    });
}

crearArchivo(estudiante);
