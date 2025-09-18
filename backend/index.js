const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Importar routers
const cursosRouter = require("./router/cursosRouter");
const estudiantesRouter = require("./router/estudiantesRouter");
const inscripcionesRouter = require("./router/inscripcionesRouter");

// Usar routers
app.use("/cursos", cursosRouter);
app.use("/estudiantes", estudiantesRouter);
app.use("/inscripciones", inscripcionesRouter);

// Levantar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
