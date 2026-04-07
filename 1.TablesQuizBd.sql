/*
Database name: quizBd
Database version: 0.0
Creation date: 2025-05-24
*/

CREATE TABLE TipoUsuario(
    TipoUsuarioId INTEGER NOT NULL AUTO_INCREMENT,
    NombreTipo VARCHAR(50) UNIQUE,
    Active BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(TipoUsuarioId)
);

CREATE TABLE Usuario(
    UsuarioId INTEGER NOT NULL AUTO_INCREMENT,
    NickName VARCHAR(50) UNIQUE,
    Password VARCHAR(50),
    FechaRegistro DATE,
    TipoUsuarioId INTEGER,
    PRIMARY KEY (UsuarioId)
);

CREATE TABLE Categoria(
    CategoriaId INTEGER NOT NULL AUTO_INCREMENT,
    NombreCategoria VARCHAR(50) UNIQUE,
    Active BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(CategoriaId)
);
CREATE TABLE Examen(
    ExamenId INTEGER NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(300) UNIQUE,
    Notas VARCHAR(400),
    CategoriaId INTEGER,
    Activo BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(ExamenId)
);
CREATE TABLE Pregunta(
    PreguntaId INTEGER NOT NULL AUTO_INCREMENT,
    ExamenId INTEGER,
    TextoPregunta TEXT,
    R1 VARCHAR(700),
    R2 VARCHAR(700),
    R3 VARCHAR(700),
    RespuestaCorrecta VARCHAR(2),
    PRIMARY KEY(PreguntaId),
    FOREIGN KEY (ExamenId) REFERENCES Examen(ExamenId)
);
CREATE TABLE Contacto(
    ContactoId INTEGER NOT NULL AUTO_INCREMENT,
    Celular VARCHAR(10),
    NombreCompleto VARCHAR(70),
    Mensaje VARCHAR(700),
    Email VARCHAR(50),
    Escuela VARCHAR(100),
    FechaRegistro DATE ,
    PRIMARY KEY(ContactoId)
);
CREATE TABLE Estudiante(
    EstudianteId INTEGER NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellidos VARCHAR(100),
    FechaRegistro DATE ,
    UsuarioId INTEGER,
    Celular VARCHAR(10),
    PRIMARY KEY(EstudianteId),
    FOREIGN KEY (UsuarioId) REFERENCES Usuario(UsuarioId)
);
CREATE TABLE ExamenEstudiante(
    ExamenEstudianteId INTEGER NOT NULL AUTO_INCREMENT,
    ExamenId INTEGER,
    EstudianteId INTEGER,
    Calificacion INTEGER,
    FechaRegistro DATE ,
    Observaciones VARCHAR(300),
    PRIMARY KEY(ExamenEstudianteId),
    FOREIGN KEY (ExamenId) REFERENCES Examen(ExamenId),
    FOREIGN KEY (EstudianteId) REFERENCES Estudiante(EstudianteId)
);

CREATE TABLE Version(
    VersionId INTEGER NOT NULL AUTO_INCREMENT,
    Version VARCHAR(50),
    PRIMARY KEY(VersionId)
);



INSERT INTO Version(Version) VALUES('0.0');

ALTER TABLE Usuario ADD COLUMN UsuarioGit VARCHAR(50);
INSERT INTO Version(Version) VALUES('1.0');

-- Agregar índices para optimizar consultas y evitar timeouts
CREATE INDEX idx_pregunta_examen ON Pregunta(ExamenId);
CREATE INDEX idx_examen_categoria ON Examen(CategoriaId);
CREATE INDEX idx_estudiante_usuario ON Estudiante(UsuarioId);
CREATE INDEX idx_examen_estudiante_examen ON ExamenEstudiante(ExamenId);
CREATE INDEX idx_examen_estudiante_estudiante ON ExamenEstudiante(EstudianteId);
CREATE INDEX idx_usuario_nickname ON Usuario(NickName);
CREATE INDEX idx_usuario_tipo ON Usuario(TipoUsuarioId);

-- Agregar claves foráneas faltantes
ALTER TABLE Usuario ADD FOREIGN KEY (TipoUsuarioId) REFERENCES TipoUsuario(TipoUsuarioId);
ALTER TABLE Examen ADD FOREIGN KEY (CategoriaId) REFERENCES Categoria(CategoriaId);

