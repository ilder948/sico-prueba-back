const CursosCtrl = {};
const Cursos = require("../../models/curso");

CursosCtrl.getCursos = async (req, res) => {
  try {
    const data = await Cursos.findAll()
    res.json(data);
    
  } catch (error) {
    res.json("ok");
  }
};

CursosCtrl.getCurso = async (req, res) => {
  try {
    const data = await Cursos.findByPk(req.params.Id);
    res.json(data);
  } catch (error) {}
};

CursosCtrl.postCurso = async (req, res) => {
  try {
    const { Nombre, NumeroCreditos } = req.body;
    const data = await Cursos.create({
      Nombre,
      NumeroCreditos,
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

CursosCtrl.updateCurso = async (req, res) => {
  try {
    const { Nombre, NumeroCreditos } = req.body;
    const data = await Cursos.update(
      {
        Nombre,
        NumeroCreditos,
      },
      {
        where: {
          Id: req.params.Id,
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

CursosCtrl.deleteCurso = async (req, res) => {
  try {
    const data = await Cursos.destroy({
      where: {
        Id: req.params.Id,
      },
    });

    res.json({
      status: 200,
      data,
    });
  } catch (error) {
    res.json({
      status: 304,
      error,
    });
  }
};

module.exports = CursosCtrl;
