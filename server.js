import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Curso de Node.js com Express",
  "/livros": "Entrei na rota livros!",
  "/autores": "Entrei na rota autores!"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(rotas[req.url]);
});

server.listen(3000, () => {console.log("Servidor escutando!")})