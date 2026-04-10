-- Tipos de usuario
INSERT INTO TipoUsuario (NombreTipo) VALUES
('Administrador'),
('Profesor'),
('Estudiante');

-- Usuarios
INSERT INTO Usuario (NickName, Password, FechaRegistro, TipoUsuarioId, UsuarioGit) VALUES
('admin01', 'adminpass', '2024-01-10', 1, 'admin01git'),
('prof_jose', 'profpass', '2024-02-15', 2, 'josegit'),
('est_maria', 'estpass', '2024-03-20', 3, 'mariagit'),
('est_pedro', 'pedropass', '2024-03-22', 3, 'pedrogit');

-- Categorías
INSERT INTO Categoria (NombreCategoria) VALUES
('Matemáticas'),
('Historia'),
('Lengua');

-- Exámenes
INSERT INTO Examen (Nombre, Notas, CategoriaId) VALUES
('Examen Álgebra Básica', 'Incluye operaciones y ecuaciones simples', 1),
('Examen Historia Universal', 'Preguntas sobre la Edad Media', 2),
('Examen Gramática Española', 'Uso de tiempos verbales', 3);

-- Preguntas
INSERT INTO Pregunta (ExamenId, TextoPregunta, R1, R2, R3, RespuestaCorrecta) VALUES
(1, '¿Cuál es el resultado de 2+2?', '3', '4', '5', 'R2'),
(1, 'Resuelve: x+3=5', 'x=1', 'x=2', 'x=3', 'R2'),
(2, '¿En qué año comenzó la Edad Media?', '476 d.C.', '1492 d.C.', '800 d.C.', 'R1'),
(3, 'Selecciona el verbo en pasado: "Yo ____ ayer"', 'corro', 'corrí', 'correré', 'R2');

-- Contactos
INSERT INTO Contacto (Celular, NombreCompleto, Mensaje, Email, Escuela, FechaRegistro) VALUES
('2221234567', 'Luis Hernández', 'Quiero más información sobre los cursos', 'luis@mail.com', 'Escuela Nacional', '2024-04-01'),
('2229876543', 'Ana López', '¿Cuándo inicia el próximo examen?', 'ana@mail.com', 'Colegio Central', '2024-04-02');

-- Estudiantes
INSERT INTO Estudiante (Nombre, Apellidos, FechaRegistro, UsuarioId, Celular) VALUES
('María', 'García Pérez', '2024-03-20', 3, '5551112233'),
('Pedro', 'Ramírez Soto', '2024-03-22', 4, '5554445566');

-- ExamenEstudiante
INSERT INTO ExamenEstudiante (ExamenId, EstudianteId, Calificacion, FechaRegistro, Observaciones) VALUES
(1, 1, 95, '2024-04-05', 'Excelente desempeño'),
(2, 2, 80, '2024-04-06', 'Buen trabajo, mejorar en fechas históricas');

-- Versiones
INSERT INTO Version (Version) VALUES
('2.0');
