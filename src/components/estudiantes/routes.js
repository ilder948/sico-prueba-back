const express = require('express').Router
const router = express()
const controller = require('./controller')


router.get('/estudiantes', controller.getEstudiantes)
router.post('/estudiantes', controller.postEstudiantes)
router.get('/estudiantes/:Id', controller.getEstudiante)
router.put('/estudiantes/:Id', controller.updateEstudiante)
router.delete('/estudiantes/:Id', controller.deleteEstudiante)



module.exports = router 