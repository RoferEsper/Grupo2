const express = require("express");
const router = express.Router();
const { 
    verCursos, 
    verCursoPorId, 
    crearCurso, 
    actualizarCurso, 
    eliminarCurso 
} = require("../controllers/cursos");

// Endpoints
router.get("/", verCursos);             // GET /cursos
router.get("/:id", verCursoPorId);           // GET /cursos/:id
router.post("/", crearCurso);           // POST /cursos
router.put("/:id", actualizarCurso);    // PUT /cursos/:id
router.delete("/:id", eliminarCurso);   // DELETE /cursos/:id

module.exports = router;
