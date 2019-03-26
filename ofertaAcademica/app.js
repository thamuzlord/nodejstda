const {cursos} = require ('./datos.js');
const fs = require('fs');


const inscripcionCursos = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand:true,
		alias: 'n'
	},
	cedula:{
		demand:true,
		alias: 'c'
	}
}

const argv = require ('yargs').command('inscribirme','Realizar inscripción',inscripcionCursos).argv;
const express = require('express');
var app = express();

let mostrarCurso=(pos, callback)=>{
	setTimeout(function(){
		console.log("El curso con ID: "+ cursos[pos].id + " " + cursos[pos].nombre + " tiene una duración de: " + cursos[pos].duracion + " horas y un valor de " + cursos[pos].valor + " pesos.");
		callback (pos+1);	
	},2000);	
}

function mostrarCursos() {
	mostrarCurso(0, function(pos){
		mostrarCurso(pos, function(pos1){
			mostrarCurso(pos1, function(pos2){
			});
		});
	});
};

const validarCurso = idCurso => {
	let idExiste = cursos.find(function(curso) {
	 return curso.id == idCurso})		

	 if(idExiste){
		let nombreCurso = cursos.find(function(curso){
			return curso.id == argv.id;
		});
		
		texto = 'El estudiante ' + argv.nombre + " con cedula " + argv.cedula + " se ha matriculado en el curso llamado " + nombreCurso.nombre + " con una duración de: " + nombreCurso.duracion + " horas y un valor de: " + nombreCurso.valor;
		fs.writeFile('inscripcion.txt',texto,(err) => {
			if(err) throw (err);
			console.log("Archivo creado");
		});

		
	 }else{
		console.log("El curso seleccionado no existe");
	 }
}

app.get('/', function (req, res) {
	res.send("texto")
  });
   
app.listen(3000);

mostrarCursos();
validarCurso(argv.id);