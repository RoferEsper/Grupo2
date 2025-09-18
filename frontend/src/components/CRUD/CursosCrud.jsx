import { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../../constants/endpoints";
import "../../styles/cursos.css";



export default function CursosCrud() {
  const [cursos, setCursos] = useState([]);
  const [form, setForm] = useState({ nombre: "", descripcion: "" });
  const [editId, setEditId] = useState(null);

  const fetchCursos = async () => {
    try {
      const res = await axios.get(ENDPOINTS.cursos);
      setCursos(res.data);
    } catch (error) {
      console.error("Error al obtener cursos:", error);
    }
  };

  useEffect(() => {
    fetchCursos();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${ENDPOINTS.cursos}/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post(ENDPOINTS.cursos, form);
      }
      setForm({ nombre: "", descripcion: "" });
      fetchCursos();
    } catch (error) {
      console.error("Error al guardar curso:", error);
    }
  };

  const handleEdit = (curso) => {
    setForm({ nombre: curso.nombre, descripcion: curso.descripcion });
    setEditId(curso.id_curso);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${ENDPOINTS.cursos}/${id}`);
      fetchCursos();
    } catch (error) {
      console.error("Error al eliminar curso:", error);
    }
  };

  return (
    <div className="crud-container">
      <h2>Gestión de Cursos</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre del curso" value={form.nombre} onChange={handleChange} required />
        <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
        <button type="submit">{editId ? "Actualizar" : "Agregar"}</button>
      </form>

      <ul>
        {cursos.map(curso => (
          <li key={curso.id_curso}>
            <span>{curso.nombre} - {curso.descripcion}</span>
            <div className="btn-group">
              <button className="edit-btn" onClick={() => handleEdit(curso)}>Editar</button>
              <button className="delete-btn" onClick={() => handleDelete(curso.id_curso)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
