const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estudiante = sequelize.define('Estudiante', {
  EstudianteId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING(50),
  },
  Apellidos: {
    type: DataTypes.STRING(100),
  },
  FechaRegistro: {
    type: DataTypes.DATEONLY,
  },
  UsuarioId: {
    type: DataTypes.INTEGER,
  },
  Celular: {
    type: DataTypes.STRING(10),
  },
}, {
  tableName: 'Estudiante',
  timestamps: false,
});

module.exports = Estudiante;
