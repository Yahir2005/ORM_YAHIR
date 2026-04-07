const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
  CategoriaId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NombreCategoria: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  Active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'Categoria',
  timestamps: false,
});

module.exports = Categoria;
