const { Model, DataTypes } = require("sequelize");
const sequelize = require("../libs/database");
const EstudianteCurso = require('./estudiantecurso')


class Estudiante extends Model {}
Estudiante.init({
  Id: {
    type: DataTypes.INTEGER(4),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  TipoIdentificacion: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  Identificacion: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  Nombre1: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  Nombre2: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  Apellido1: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  Apellido2: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Celular: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  Direccion: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Ciudad: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Estudiantes',
  timestamps: false
});

Estudiante.hasMany(EstudianteCurso, { foreignKey: 'IdEstudiante'})
EstudianteCurso.belongsTo(Estudiante, {foreignKey: 'IdEstudiante'})


module.exports = Estudiante;

