const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pregunta = sequelize.define('Pregunta', {
  PreguntaId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ExamenId: {
    type: DataTypes.INTEGER,
  },
  TextoPregunta: {
    type: DataTypes.TEXT,
  },
  R1: {
    type: DataTypes.STRING(700),
  },
  R2: {
    type: DataTypes.STRING(700),
  },
  R3: {
    type: DataTypes.STRING(700),
  },
  RespuestaCorrecta: {
    type: DataTypes.STRING(2),
  },
}, {
  tableName: 'Pregunta',
  timestamps: false,
});

module.exports = Pregunta;
