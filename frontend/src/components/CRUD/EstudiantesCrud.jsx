import { useEffect, useState } from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import axios from "axios";
import "../../styles/estudiantes.css";

export default function EstudiantesCrud() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nuevoEstudiante, setNuevoEstudiante] = useState({ nombre: "", email: "" });

  const fetchEstudiantes = async () => {
    const res = await axios.get(ENDPOINTS.estudiantes);
    setEstudiantes(res.data);
  };

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  const handleChange = (e) => {
    setNuevoEstudiante({ ...nuevoEstudiante, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(ENDPOINTS.estudiantes, nuevoEstudiante);
    fetchEstudiantes();
  };

  return (
    <div className="crud-container">
      <h2>Gestión de Estudiantes</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoEstudiante.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={nuevoEstudiante.email}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {estudiantes.map((est) => (
          <li key={est.id_estudiante}>
            <strong>{est.nombre}</strong> - {est.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
