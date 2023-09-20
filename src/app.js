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

export default app;