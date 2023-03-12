import Autor from "../models/Autor.js";

class AutorController {
    static listAutores = async (req, res) => {
        try {
            const autores = await Autor.find();
            res.json(autores);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar autores" });
        }
    };

    static findAutor = async (req, res) => {
        try {
            const autor = await Autor.findById(req.params.id);
            if (!autor) throw new Error("Autor não encontrado");
            res.json(autor);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    };

    static createAutor = async (req, res) => {
        try {
            const autor = new Autor(req.body);
            await autor.save();
            res.status(201).json({ message: "Autor foi cadastrado com sucesso" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar autor" });
        }
    };

    static updateAutor = async (req, res) => {
        try {
            const autor = await Autor.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.json(autor);
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar autor" });
        }
    };

    static deleteAutor = async (req, res) => {
        try {
            await Autor.findByIdAndDelete(req.params.id);
            res.json({ message:`Autor ${req.params.id} removido com sucesso!`});
    } catch(error) {
        res.status(500).json({ error: "Erro ao remover autor" });
    }
};
}

export default AutorController;