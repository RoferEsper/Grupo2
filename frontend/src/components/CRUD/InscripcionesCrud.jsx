import { useEffect, useState } from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import axios from "axios";
import "../../styles/inscripciones.css";

export default function InscripcionesCrud() {
  const [inscripciones, setInscripciones] = useState([]);
  const [form, setForm] = useState({ id_estudiante_FK: "", id_curso_FK: "" });

  const fetchInscripciones = async () => {
    const res = await axios.get(ENDPOINTS.inscripciones);
    setInscripciones(res.data);
  };

  useEffect(() => {
    fetchInscripciones();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(ENDPOINTS.inscripciones, form);
    fetchInscripciones();
  };

  return (
    <div className="crud-container">
      <h2>Gestión de Inscripciones</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="id_estudiante_FK"
          placeholder="ID Estudiante"
          value={form.id_estudiante_FK}
          onChange={handleChange}
        />
        <input
          type="number"
          name="id_curso_FK"
          placeholder="ID Curso"
          value={form.id_curso_FK}
          onChange={handleChange}
        />
        <button type="submit">Inscribir</button>
      </form>

      <ul>
        {inscripciones.map((ins) => (
          <li key={ins.id_inscripcion}>
            Estudiante {ins.id_estudiante_FK} inscrito en curso {ins.id_curso_FK}
          </li>
        ))}
      </ul>
    </div>
  );
}
