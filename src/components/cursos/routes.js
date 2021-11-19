const express = require('express').Router
const router = express()
const controller = require('./controller')


router.get('/cursos', controller.getCursos)
router.post('/cursos', controller.postCurso)
router.get('/cursos/:Id', controller.getCurso)
router.put('/cursos/:Id', controller.updateCurso)
router.delete('/cursos/:Id', controller.deleteCurso)


module.exports = router 