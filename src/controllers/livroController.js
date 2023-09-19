import livro from "../models/Livro.js";

class LivroController{
  static async listarLivros (req, res) {
    try{
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error){
      res.status(500).json({message: `Falha na requisição`})
    }
  };

  static async listarLivroPorId (req, res) {
    try{
      const id = req.params.id;
      const livroDaBusca = await livro.findById(id);
      res.status(200).json(livroDaBusca);
    } catch (error){
      res.status(500).json({message: `Falha na requisição`})
    }
  };

  static async cadastrarLivro(req, res){
    try{
      const novoLivro = await livro.create(req.body);
      res.status(201).json({message: "Criado com sucesso", livro: novoLivro})

    } catch (error){
      res.status(500).json({message: `${error.message} - falha ao cadastrar livro`})
    }
  };

  static async atualizarLivro (req, res) {
    try{
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Livro atualizado"});
    } catch (error){
      res.status(500).json({message: `Falha na requisição`})
    }
  };

  static async deletarLivro (req, res) {
    try{
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({message: "Livro deletado"});
    } catch (error){
      res.status(500).json({message: `Falha na requisição`})
    }
  };


};


export default LivroController;