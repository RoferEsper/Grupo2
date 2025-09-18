const express = require("express");
const router = express.Router();
const { 
    verEstudiantes, 
    verEstudiante, 
    crearEstudiante, 
    actualizarEstudiante, 
    eliminarEstudiante 
} = require("../controllers/estudiantes");

// Endpoints
router.get("/", verEstudiantes);             // GET /estudiantes
router.get("/:id", verEstudiante);           // GET /estudiantes/:id
router.post("/", crearEstudiante);           // POST /estudiantes
router.put("/:id", actualizarEstudiante);    // PUT /estudiantes/:id
router.delete("/:id", eliminarEstudiante);   // DELETE /estudiantes/:id

module.exports = router;
