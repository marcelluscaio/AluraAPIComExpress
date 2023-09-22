/* import mongoose from "mongoose"; */
import { autor } from "../models/Autor.js";

class AutorController{
	static async listarAutores (req, res) {
		try{
			const listaAutores = await autor.find({});
			res.status(200).json(listaAutores);
		} catch (error){
			res.status(500).json({message: "Falha na requisição"});
		}
	}

	static async listarAutorPorId (req, res, next) {
		try{
			const id = req.params.id;
			const autorDaBusca = await autor.findById(id);

			if(autorDaBusca !== null){
				res.status(200).json(autorDaBusca);
			} else {
				res.status(404).json({message: "ID do autor nao localizada"});
			}
		} catch (error){
			next(error);
		}
	}

	static async cadastrarAutor(req, res, next){
		try{
			const novoAutor = await autor.create(req.body);
			res.status(201).json({message: "Criado com sucesso", autor: novoAutor});

		} catch (error){
			next(error);
		}
	}

	static async atualizarAutor (req, res, next) {
		try{
			const id = req.params.id;
			await autor.findByIdAndUpdate(id, req.body);
			res.status(200).json({message: "Autor atualizado"});
		} catch (error){
			next(error);
		}
	}

	static async deletarAutor (req, res, next) {
		try{
			const id = req.params.id;
			await autor.findByIdAndDelete(id);
			res.status(200).json({message: "Autor deletado"});
		} catch (error){
			next(error);
		}
	}
}


export default AutorController;