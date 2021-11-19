const EstudianteCursosCtrl = {};
const { Op } = require("sequelize");
const Curso = require("../../models/curso");
const Estudiante = require("../../models/estudiante");
const Notas = require("../../models/estudiantecurso");

EstudianteCursosCtrl.getEstudiantesCursos = async (req, res) => {
  try {
    const result = await Notas.findAll({
      attributes: ["Id", "NotaFinal"],
      where: {
        IdCurso: {
          [Op.eq]: req.query.curso,
        },
      },
      include: [
        {
          model: Estudiante,
        },
        {
          model: Curso,
        },
      ],
    });
    res.status(200).json({
      status: 200,
      count: result.length,
      data: result,
    });
  } catch (error) {
    res.json("ok");
  }
};

EstudianteCursosCtrl.postEstudiantesCursos = async (req, res) => {
  try {
    const { IdEstudiante, IdCurso, NotaFinal } = req.body;
    Notas.create({
      IdEstudiante,
      IdCurso,
      NotaFinal,
    }).then((notas) => {
      res.json(notas);
    });
  } catch (error) {
    res.json(error);
  }
};

EstudianteCursosCtrl.updateEstudiantesCursos = async (req, res) => {
  try {
    let IdEstudiante = req.body.IdEstudiante
    let NotaFinal = req.body.NotaFinal
    let IdCurso = req.body.IdCurso
    let Id = req.params.Id

    IdEstudiante = parseInt(IdEstudiante)
    NotaFinal = parseInt(NotaFinal)
    IdCurso = parseInt(IdCurso)
    Id = parseInt(Id)
    const data = await Notas.update(
      {
        IdEstudiante,
        IdCurso,
        NotaFinal,
      },
      {
        where: {
          Id: Id,
        },
      }
    )
    res.json(data);  
    
  } catch (error) {
    res.json(error);
  }
};

EstudianteCursosCtrl.buscarAsignados = async (req, res) => {
  try {
    const results = await Notas.findAll({
      where: {
        [Op.and]: [
          { IdCurso: req.body.IdCurso },
          { IdEstudiante: req.body.IdEstudiante },
        ],
      },
      include: [
        {
          model: Curso,
        },
        {
          model: Estudiante,
        },
      ],
      attributes: ["Id", "NotaFinal"],
    });
    res.json(results);
  } catch (error) {
    res.json(error)
  }
};

EstudianteCursosCtrl.searchByEstudent = async (req, res) => {
  try {
    const results = await Notas.findAll({
      where: {
        IdEstudiante: {
          [Op.eq]: req.params.IdEstudiante,
        },
      },
      include: [
        {
          model: Curso,
        },
      ],
      attributes: ["Id", "NotaFinal"],
    });
    res.json(results);
  } catch (error) {
    res.json(error);
  }
};

EstudianteCursosCtrl.detalleEstudianteCurso = async (req, res) => {
  try {
    const data = await Notas.findOne({
      where: {
        Id: {
          [Op.eq]: req.params.Id,
        },
      },
      include: [
        {
          model: Estudiante,
        },
        {
          model: Curso,
        },
      ],
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

module.exports = EstudianteCursosCtrl;
