import mongoose from "mongoose";
import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = app => {
	app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

	app.use(express.json(), livros, autores);

	// eslint-disable-next-line no-unused-vars
	app.use((error, req, res, next) => {
		if(error instanceof mongoose.Error.CastError){
			res.status(400).json({message: "Um ou mais dados estão incorretos"});
		} else{
			res.status(500).json({message: "Falha na requisição"});
		}
	});
};

export default routes;