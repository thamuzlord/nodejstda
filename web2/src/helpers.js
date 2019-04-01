const hbs = require('hbs');

hbs.registerHelper('obtenerPromedio', (nota1,nota2,nota3) => {
    return (nota1+nota2+nota3)/3
})

hbs.registerHelper('listar',() => {
    listaEstudiantes = require('./listado.json');
    let texto = "<table> \
                    <thead> \
                    <th>Nombre</th> \
                    <th>Matematicas</th> \
                    <th>Ingles</th> \
                </thead> \
                <tbody>";

    listaEstudiantes.forEach(estudiante => {
        texto = texto +
        '<tr>' +
        '<td>'+ estudiante.nombre + '<td>' +
        '<td>' + estudiante.matematicas + '<td>' +
        '<td>' + estudiante.ingles + '</td></tr>' ;

    })
    texto = texto + '</tbody></table>';
    return texto;
});