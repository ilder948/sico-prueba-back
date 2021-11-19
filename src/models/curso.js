const { Model, DataTypes, BelongsTo } = require("sequelize");
const sequelize = require("../libs/database");
const EstudianteCurso = require("./estudiantecurso");


class Curso extends Model {}
Curso.init({
    Id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    NumeroCreditos: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Cursos',
    timestamps: false
  });  

  Curso.hasMany(EstudianteCurso, { foreignKey: 'IdCurso'})
  EstudianteCurso.belongsTo(Curso, {foreignKey: 'IdCurso'})

  module.exports = Curso;
