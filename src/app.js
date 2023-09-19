import express from "express";
import connectWithDatabase from "./config/dbConnect.js";
import routes from "./Routes/index.js";

const connection = await connectWithDatabase();

connection.on("error", (error) => {
  console.error("erro de conexão", error)
});

connection.once("open", () => {
  console.log("Conexão com banco feita com sucesso")
});

const app = express();
routes(app);


/* app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index])
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});
 */

/* app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).json(livros);
}); */

export default app;