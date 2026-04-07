const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Examen = sequelize.define('Examen', {
  ExamenId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING(300),
    unique: true,
  },
  Notas: {
    type: DataTypes.STRING(400),
  },
  CategoriaId: {
    type: DataTypes.INTEGER,
  },
  Activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'Examen',
  timestamps: false,
});

module.exports = Examen;
