const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contacto = sequelize.define('Contacto', {
  ContactoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Celular: {
    type: DataTypes.STRING(10),
  },
  NombreCompleto: {
    type: DataTypes.STRING(70),
  },
  Mensaje: {
    type: DataTypes.STRING(700),
  },
  Email: {
    type: DataTypes.STRING(50),
  },
  Escuela: {
    type: DataTypes.STRING(100),
  },
  FechaRegistro: {
    type: DataTypes.DATEONLY,
  },
}, {
  tableName: 'Contacto',
  timestamps: false,
});

module.exports = Contacto;
