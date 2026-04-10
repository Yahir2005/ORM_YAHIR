const {tipoUsuario} = require('../models');

const getAll = async (req, res) => {
  try {
    const tiposUsuario = await TipoUsuario.findAll();
    res.json(tiposUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.findByPk(req.params.id);
    if (!tipoUsuario) return res.status(404).json({ error: 'Tipo de usuario no encontrado' });
    res.json(tipoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.create(req.body);
    res.status(201).json(tipoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.findByPk(req.params.id);
    if (!tipoUsuario) return res.status(404).json({ error: 'Tipo de usuario no encontrado' });
    await tipoUsuario.update(req.body);
    res.json(tipoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.findByPk(req.params.id);
    if (!tipoUsuario) return res.status(404).json({ error: 'Tipo de usuario no encontrado' });
    await tipoUsuario.update({ Active: false });
    res.json({ message: 'Tipo de usuario desactivado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, getById, create, update, remove };