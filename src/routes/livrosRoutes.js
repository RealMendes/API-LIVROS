import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listLivros)
    .get("/livros/busca", LivroController.editorasLivro)
    .get("/livros/:id", LivroController.findLivro)
    .post("/livros", LivroController.createlivro)
    .put("/livros/:id", LivroController.updateLivro)
    .delete("/livros/:id", LivroController.deleteLivro)

export default router;   