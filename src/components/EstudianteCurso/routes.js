const express = require('express').Router
const router = express()
const controller = require('./controller')

router.get('/notas', controller.getEstudiantesCursos)
router.post('/notas', controller.postEstudiantesCursos)
router.post('/notas/asignados', controller.buscarAsignados)
router.get('/notas/estudiantes/:IdEstudiante', controller.searchByEstudent)
router.get('/notas/:Id', controller.detalleEstudianteCurso)
router.put('/notas/:Id', controller.updateEstudiantesCursos)


module.exports = router 