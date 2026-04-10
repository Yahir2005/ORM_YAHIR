const {Examen} = require('../models/Examen');

const getAll = async (req, res) => {
  try {
    const examenes = await Examen.findAll();
    res.json(examenes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const examen = await Examen.findByPk(req.params.id);
    if (!examen) return res.status(404).json({ error: 'Examen no encontrado' });
    res.json(examen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const examen = await Examen.create(req.body);
    res.status(201).json(examen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const examen = await Examen.findByPk(req.params.id);
    if (!examen) return res.status(404).json({ error: 'Examen no encontrado' });
    await examen.update(req.body);
    res.json(examen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const examen = await Examen.findByPk(req.params.id);
    if (!examen) return res.status(404).json({ error: 'Examen no encontrado' });
    await examen.update({ Active: false });
    res.json({ message: 'Examen desactivado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, getById, create, update, remove };