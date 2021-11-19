const express = require("express");
const estudiantes = require('../components/estudiantes/routes')
const cursos = require('../components/cursos/routes')
const notas = require('../components/EstudianteCurso/routes')

const routes = (server) => {
    server.use('/', estudiantes)
    server.use('/', cursos)
    server.use('/', notas)
}

module.exports = routes