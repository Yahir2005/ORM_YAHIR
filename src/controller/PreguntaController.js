const {Pregunta} = require('../model');

const getAll = async (req, res) => {
  try {
    const preguntas = await Pregunta.findAll();
    res.json(preguntas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
};

const getById = async (req, res) => {
  try {
    const pregunta = await Pregunta.findByPk(req.params.id);
    if (!pregunta) return res.status(404).json({ error: 'Pregunta no encontrada' });
    res.json(pregunta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const pregunta = await Pregunta.create(req.body);
    res.status(201).json(pregunta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const pregunta = await Pregunta.findByPk(req.params.id);
    if (!pregunta) return res.status(404).json({ error: 'Pregunta no encontrada' });
    await pregunta.update(req.body);
    res.json(pregunta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const pregunta = await Pregunta.findByPk(req.params.id);
    if (!pregunta) return res.status(404).json({ error: 'Pregunta no encontrada' });
    await pregunta.update({ Active: false });
    res.json({ message: 'Pregunta desactivada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, getById, create, update, remove };