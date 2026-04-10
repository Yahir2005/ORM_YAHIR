const {ExamenEstudiante} = require('../models');

const getAll = async (req, res) => {
  try {
    const examenEstudiantes = await ExamenEstudiante.findAll();
    res.json(examenEstudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const examenEstudiante = await ExamenEstudiante.findByPk(req.params.id);
    if (!examenEstudiante) return res.status(404).json({ error: 'ExamenEstudiante no encontrado' });
    res.json(examenEstudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const examenEstudiante = await ExamenEstudiante.create(req.body);
    res.status(201).json(examenEstudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const examenEstudiante = await ExamenEstudiante.findByPk(req.params.id);
    if (!examenEstudiante) return res.status(404).json({ error: 'ExamenEstudiante no encontrado' });
    await examenEstudiante.update(req.body);
    res.json(examenEstudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const examenEstudiante = await ExamenEstudiante.findByPk(req.params.id);
    if (!examenEstudiante) return res.status(404).json({ error: 'ExamenEstudiante no encontrado' });
    await examenEstudiante.update({ Active: false });
    res.json({ message: 'ExamenEstudiante desactivado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, getById, create, update, remove };