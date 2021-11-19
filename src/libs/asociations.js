const Estudiante = require('../models/estudiante')
const Curso = require('../models/curso')
const EstudianteCurso = require('../models/estudiantecurso')

Estudiante.hasMany(EstudianteCurso, { foreignKey: 'IdEstudiante'})
EstudianteCurso.belongsTo(Estudiante, {foreignKey: 'IdEstudiante'})

Curso.hasMany(EstudianteCurso, {foreignKey: 'IdCurso'})
EstudianteCurso.belongsTo(Curso, {foreignKey: 'IdCurso'})



module.exports = {
    Estudiante, 
    EstudianteCurso, 
    Curso
}