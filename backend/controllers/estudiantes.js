const { connection } = require("../config DB/dataBase");


const verEstudiantes = (req, res) => {
    connection.query('SELECT * FROM estudiantes', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener los estudiantes' });
        }
        res.json(results);
    });
};


const verEstudiante = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM estudiantes WHERE id_estudiante = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener el estudiante' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }
        res.json(results[0]);
    });
};

const crearEstudiante = (req, res) => {
    const { nombre, email } = req.body;
    connection.query(
        'INSERT INTO estudiantes (nombre, email) VALUES (?, ?)',
        [nombre, email],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error al crear el estudiante' });
            }
            res.json({ message: 'Estudiante creado con éxito', id: results.insertId });
        }
    );
};


const actualizarEstudiante = (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    connection.query(
        'UPDATE estudiantes SET nombre = ?, email = ? WHERE id_estudiante = ?',
        [nombre, email, id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error al actualizar el estudiante' });
            }
            res.json({ message: 'Estudiante actualizado con éxito' });
        }
    );
};


const eliminarEstudiante = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM estudiantes WHERE id_estudiante = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al eliminar el estudiante' });
        }
        res.json({ message: 'Estudiante eliminado con éxito' });
    });
};

module.exports = { verEstudiantes, verEstudiante, crearEstudiante, actualizarEstudiante, eliminarEstudiante };