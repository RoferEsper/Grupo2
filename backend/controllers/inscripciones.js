const { connection } = require("../config DB/dataBase");

// Obtener todas las inscripciones
const verInscripciones = (req, res) => {
    connection.query(
        `SELECT i.id_inscripcion, e.nombre AS estudiante, c.nombre AS curso, i.fecha_inscripcion
         FROM inscripciones i
         INNER JOIN estudiantes e ON i.id_estudiante_FK = e.id_estudiante
         INNER JOIN cursos c ON i.id_curso_FK = c.id_curso`,
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error al obtener las inscripciones' });
            }
            res.json(results);
        }
    );
};

// Inscribir un estudiante en un curso
const crearInscripcion = (req, res) => {
    const { id_estudiante_FK, id_curso_FK } = req.body;
    const fecha_inscripcion = new Date();

    connection.query(
        'INSERT INTO inscripciones (id_estudiante_FK, id_curso_FK, fecha_inscripcion) VALUES (?, ?, ?)',
        [id_estudiante_FK, id_curso_FK, fecha_inscripcion],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error al crear la inscripción' });
            }
            res.json({ message: 'Inscripción creada con éxito', id: results.insertId });
        }
    );
};

// Eliminar inscripción
const eliminarInscripcion = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM inscripciones WHERE id_inscripcion = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al eliminar la inscripción' });
        }
        res.json({ message: 'Inscripción eliminada con éxito' });
    });
};

module.exports = { verInscripciones, crearInscripcion, eliminarInscripcion };
