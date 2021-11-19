const EstudianteCtrl = {};
const Estudiante = require("../../models/estudiante");
const EstudianteCurso = require("../../models/estudiantecurso");

EstudianteCtrl.getEstudiantes = async (req, res) => {
  try {
    const data = await Estudiante.findAll({
      include: EstudianteCurso,
    })
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

EstudianteCtrl.getEstudiante = async (req, res) => {
  try {
    const data = await Estudiante.findByPk(req.params.Id);
    res.json({
      status: 200,
      data,
    });
  } catch (error) {}
};

EstudianteCtrl.updateEstudiante = async (req, res) => {
  try {
    const {
      Id,
      TipoIdentificacion,
      Identificacion,
      Nombre1,
      Nombre2,
      Apellido1,
      Apellido2,
      Email,
      Celular,
      Direccion,
      Ciudad,
    } = req.body;

    const data = await Estudiante.update(
      {
        TipoIdentificacion,
        Identificacion,
        Nombre1,
        Nombre2,
        Apellido1,
        Apellido2,
        Email,
        Celular,
        Direccion,
        Ciudad,
      },
      {
        where: {
          Id: req.params.Id,
        },
      }
    )
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

EstudianteCtrl.postEstudiantes = async (req, res) => {
  try {
    const {
      Id,
      TipoIdentificacion,
      Identificacion,
      Nombre1,
      Nombre2,
      Apellido1,
      Apellido2,
      Email,
      Celular,
      Direccion,
      Ciudad,
    } = req.body;
    const data = await Estudiante.create({
      TipoIdentificacion,
      Identificacion,
      Nombre1,
      Nombre2,
      Apellido1,
      Apellido2,
      Email,
      Celular,
      Direccion,
      Ciudad,
    })
    res.json(estudiante);
  } catch (error) {
    res.json(error)
  }
};

EstudianteCtrl.deleteEstudiante = async (req, res) => {
  try {
    const data = await Estudiante.destroy({
      where: {
        Id: req.params.Id,
      },
    });
    res.json({
      status: 200,
    });
    
  } catch (error) {
    res.json({
      status: 304,
      error
    });
  }
};

module.exports = EstudianteCtrl;
