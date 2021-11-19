const { Model, DataTypes } = require('sequelize')
const sequelize = require('../libs/database')

class EstudianteCurso extends Model {}

EstudianteCurso.init({
      Id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      IdEstudiante: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      IdCurso: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      NotaFinal: {
        type: DataTypes.INTEGER(3),
        allowNull: true,
      },
    },{ 
        sequelize,
        modelName: 'EstudianteCursos',
        timestamps: false
    }
  );

  

  module.exports = EstudianteCurso