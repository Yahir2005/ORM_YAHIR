const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  UsuarioId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NickName: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  Password: {
    type: DataTypes.STRING(50),
  },
  FechaRegistro: {
    type: DataTypes.DATEONLY,
  },
  TipoUsuarioId: {
    type: DataTypes.INTEGER,
  },
  UsuarioGit: {
    type: DataTypes.STRING(50),
  },
}, {
  tableName: 'Usuario',
  timestamps: false,
});

module.exports = Usuario;
