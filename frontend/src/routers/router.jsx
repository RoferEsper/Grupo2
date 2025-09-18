import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CursosPage from "../Pages/CursosPage";
import EstudiantesPage from "../Pages/EstudiantesPage";
import InscripcionesPage from "../Pages/InscripcionesPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/cursos">Cursos</Link> | 
        <Link to="/estudiantes">Estudiantes</Link> | 
        <Link to="/inscripciones">Inscripciones</Link>
      </nav>

      <Routes>
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/estudiantes" element={<EstudiantesPage />} />
        <Route path="/inscripciones" element={<InscripcionesPage />} />
      </Routes>
    </BrowserRouter>
  );
}