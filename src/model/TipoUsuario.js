const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoUsuario = sequelize.define('TipoUsuario', {
  TipoUsuarioId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NombreTipo: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  Active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'TipoUsuario',
  timestamps: false,
});

module.exports = TipoUsuario;
