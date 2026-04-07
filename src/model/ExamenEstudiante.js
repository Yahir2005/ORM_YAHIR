const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ExamenEstudiante = sequelize.define('ExamenEstudiante', {
  ExamenEstudianteId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ExamenId: {
    type: DataTypes.INTEGER,
  },
  EstudianteId: {
    type: DataTypes.INTEGER,
  },
  Calificacion: {
    type: DataTypes.INTEGER,
  },
  FechaRegistro: {
    type: DataTypes.DATEONLY,
  },
  Observaciones: {
    type: DataTypes.STRING(300),
  },
}, {
  tableName: 'ExamenEstudiante',
  timestamps: false,
});

module.exports = ExamenEstudiante;
