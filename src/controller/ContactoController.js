const { Contacto } = require("../model");

const getAll = async (req, res) => {
  try {
    const contactos = await Contacto.findAll();
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const contacto = await Contacto.findByPk(req.params.id);
    if (!contacto) return res.status(404).json({ error: "Contacto no encontrado" });
    res.json(contacto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const contacto = await Contacto.create(req.body);
    res.status(201).json(contacto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const contacto = await Contacto.findByPk(req.params.id);
    if (!contacto) return res.status(404).json({ error: "Contacto no encontrado" });
    await contacto.update(req.body);
    res.json(contacto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const contacto = await Contacto.findByPk(req.params.id);
    if (!contacto) return res.status(404).json({ error: "Contacto no encontrado" });
    await contacto.update({ Active: false });
    res.json({ message: "Contacto desactivado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, getById, create, update, remove };
