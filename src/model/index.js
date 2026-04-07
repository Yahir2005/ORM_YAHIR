const sequelize = require('../config/database');

// Import models
const TipoUsuario = require('./TipoUsuario');
const Usuario = require('./Usuario');
const Categoria = require('./Categoria');
const Examen = require('./Examen');
const Pregunta = require('./Pregunta');
const Contacto = require('./Contacto');
const Estudiante = require('./Estudiante');
const ExamenEstudiante = require('./ExamenEstudiante');
const Version = require('./Version');

// Associations

// Usuario belongs to TipoUsuario
Usuario.belongsTo(TipoUsuario, { foreignKey: 'TipoUsuarioId' });
TipoUsuario.hasMany(Usuario, { foreignKey: 'TipoUsuarioId' });

// Examen belongs to Categoria
Examen.belongsTo(Categoria, { foreignKey: 'CategoriaId' });
Categoria.hasMany(Examen, { foreignKey: 'CategoriaId' });

// Pregunta belongs to Examen
Pregunta.belongsTo(Examen, { foreignKey: 'ExamenId' });
Examen.hasMany(Pregunta, { foreignKey: 'ExamenId' });

// Estudiante belongs to Usuario
Estudiante.belongsTo(Usuario, { foreignKey: 'UsuarioId' });
Usuario.hasOne(Estudiante, { foreignKey: 'UsuarioId' });

// ExamenEstudiante belongs to Examen and Estudiante
ExamenEstudiante.belongsTo(Examen, { foreignKey: 'ExamenId' });
ExamenEstudiante.belongsTo(Estudiante, { foreignKey: 'EstudianteId' });
Examen.hasMany(ExamenEstudiante, { foreignKey: 'ExamenId' });
Estudiante.hasMany(ExamenEstudiante, { foreignKey: 'EstudianteId' });

module.exports = {
  sequelize,
  TipoUsuario,
  Usuario,
  Categoria,
  Examen,
  Pregunta,
  Contacto,
  Estudiante,
  ExamenEstudiante,
  Version,
};
