const express = require("express");
const router = express.Router();
const { 
    verInscripciones, 
    crearInscripcion, 
    eliminarInscripcion 
} = require("../controllers/inscripciones");

// Endpoints
router.get("/", verInscripciones);            // GET /inscripciones
router.post("/", crearInscripcion);           // POST /inscripciones
router.delete("/:id", eliminarInscripcion);   // DELETE /inscripciones/:id

module.exports = router;
