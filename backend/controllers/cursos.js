const { connection } = require("../config DB/dataBase")


const verCursos = (req, res) => {
    connection.query('SELECT * FROM Cursos', (error, results) => {
        if (error) {
            return res.status(500).json({error: 'Error al obtener los Cursos'});
        }
        res.json(results);
    });
}



const verCursoPorId = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM Cursos WHERE id = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json({error: 'Error al obtener el Curso'});
        }
        if (results.length === 0) {
            return res.status(404).json({error: 'Curso no encontrado'});
        }
        res.json(results[0]);
    })

}



const crearCurso = (req, res) => {
    const { nombre, descripcion } = req.body;
    connection.query(
        'INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)',
        [nombre, descripcion],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error al crear el curso' });
            }
            res.json({ message: 'Curso creado con éxito', id: results.insertId });
        }
    );
};



const actualizarCurso = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    connection.query(
        'UPDATE cursos SET nombre = ?, descripcion = ? WHERE id_curso = ?',
        [nombre, descripcion, id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Error al actualizar el curso' });
            }
            res.json({ message: 'Curso actualizado con éxito' });
        }
    );
};




const eliminarCurso = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM cursos WHERE id_curso = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al eliminar el curso' });
        }
        res.json({ message: 'Curso eliminado con éxito' });
    });
};


module.exports = { verCursos, verCursoPorId, crearCurso, actualizarCurso, eliminarCurso };