const hbs = require('hbs');
const fs = require('fs');
listaCursos = [];

const cursos = () => {
    try{
        listaCursos = require('../listadoCursos.json')
    }catch(error){
        listaCursos = [];
    }
};

const guardarCurso = () => {
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('./listadoCursos.json',datos,(err) =>{
        if (err) throw (err);
        console.log('Curso Creado');        
    })
};

hbs.registerHelper('registrarCursos', (idCurso,nombreCompleto,modalidad,valor,descripcion,intensidadHoraria,estado) => {
    cursos();
    let curso = {
        idCurso,
        nombreCompleto,
        descripcion,
        valor,
        modalidad,
        intensidadHoraria,
        estado
    }
    let texto = "";
    let duplicado = listaCursos.find(cur => cur.idCurso == idCurso);
    if (!duplicado) {
        listaCursos.push(curso);
        guardarCurso();
        texto = '<h4 class="text-center">Curso creado con exito.</h4>' +
                '<center><img src="https://media.tenor.com/images/750db375022ec37821f4a862b87f85c0/tenor.gif"></center>'
    }else{
        texto = '<h4 class="text-center">Ya existe un curso registrado con este Identificador.</h4>' +
                '<center><img src="https://media.giphy.com/media/ewNZfqaDIHwLm/giphy.gif"></center>'
    }
    return texto;
});

hbs.registerHelper('listarCursos',() => {
    listaCursos = require('../listadoCursos.json');
    let texto = "";
        listaCursos.forEach(curso => {
        let disponibilidadCurso = curso.estado ? 'Disponible' : 'Cerrado';
        texto = texto +
        '<tr>' +
        '<td>'+ curso.idCurso + '</td>' +
        '<td>' + curso.nombreCompleto + '</td>' +
        '<td>' + curso.descripcion + '</td>' +
        '<td>' + curso.valor + '</td>' +
        '<td>' + curso.modalidad + '</td>' +
        '<td>' + curso.intensidadHoraria + '</td>' +
        '<td>' + disponibilidadCurso + '</td></tr>' ;
    })
    return texto;
});