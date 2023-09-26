import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController{
	static async listarLivros (req, res) {
		try{
			const listaLivros = await livro.find({});
			res.status(200).json(listaLivros);
		} catch (error){
			res.status(500).json({message: "Falha na requisição"});
		}
	}

	static async listarLivroPorId (req, res, next) {
		try{
			const id = req.params.id;
			const livroDaBusca = await livro.findById(id);
			res.status(200).json(livroDaBusca);
		} catch (error){
			next(error);
		}
	}

	static async cadastrarLivro(req, res, next){
		const novoLivro = req.body;
		try{
			const autorEncontrado = await autor.findById(novoLivro.autor);
			const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
			await livro.create(livroCompleto);
			res.status(201).json({message: "Criado com sucesso", livro: novoLivro});

		} catch (error){
			next(error);
		}
	}

	static async atualizarLivro (req, res, next) {
		try{
			const id = req.params.id;
			await livro.findByIdAndUpdate(id, req.body);
			res.status(200).json({message: "Livro atualizado"});
		} catch (error){
			next(error);
		}
	}

	static async deletarLivro (req, res, next) {
		try{
			const id = req.params.id;
			await livro.findByIdAndDelete(id);
			res.status(200).json({message: "Livro deletado"});
		} catch (error){
			next(error);
		}
	}

	static async listarLivrosPorFiltro(req, res, next){
		const {editora, titulo }= req.query.editora;
		const busca = {};
		if(editora) busca.editora = editora;
		if(titulo) busca.titulo = titulo;
		try{
			const livrosPorEditora = await livro.find(busca);
			res.status(200).json(livrosPorEditora);
		} catch(error){
			next(error);
		}
	}
}


export default LivroController;