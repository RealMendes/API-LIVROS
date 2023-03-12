import Livro from "../models/Livro.js";

class LivroController {

    static async listLivros(req, res) {
        try {
            const livros = await Livro.find().populate('autor').exec();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static findLivro = async (req, res) => {
        try {
            const livro = await Livro.findById(req.params.id).populate('autor').exec();
            res.json(livro);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static createlivro = async (req, res) => {
        try {
            const livro = new Livro(req.body);
            await livro.save();
            res.status(201).send('Livro foi cadastrado com sucesso');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static updateLivro = async (req, res) => {
        try {
            const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(livro);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static deleteLivro = async (req, res) => {
        try {
            await Livro.findByIdAndDelete(req.params.id);
            res.send(`Livro ${req.params.id} removido com sucesso!`);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static editorasLivro = async (req, res) => {
        try {
           const editora = await Livro.find({ editora: req.query.editora });
           res.json(editora);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default LivroController;
