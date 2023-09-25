import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema ({
	id: { type: mongoose.Schema.Types.ObjectId },
	titulo: { 
		type: String, 
		required: [true, "Título obrigatório"] },
	editora: { type: String },
	preco: { type: Number },
	paginas: { 
		type: Number,
		min: [30, "O numero minimo de paginas eh 30"],
		max: [5000, "Livro nao pode ter mais que 5000 paginas"]
	},
	autor: autorSchema
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;