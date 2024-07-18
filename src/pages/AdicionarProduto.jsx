import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addProduto } from "../firebase/produtos";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function AdicionarProduto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const usuario = useContext(UsuarioContext);

  const navigate = useNavigate();

  function salvarProduto(data) { 
    data.idUsuario = usuario.uid;

    addProduto(data)
      .then(() => {
        toast.success("Produto adicionado com sucesso!");
        navigate("/produtos");
      })
      .catch(() => {
        toast.error("Um erro aconteceu ao adicionar produto!");
      });
  }

  if (usuario === null) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarProduto)}>
        <h1>Adicionar Produto</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("nome", { required: true, maxLength: 200 })}
          />
          {errors.nome && (
            <small className="invalid">O nome é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">A descrição é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            step="0.01"
            id="preco"
            className="form-control"
            {...register("preco", { required: true })}
          />
          {errors.preco && (
            <small className="invalid">O preço é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            className="form-control"
            {...register("quantidade", { required: true })}
          />
          {errors.quantidade && (
            <small className="invalid">A quantidade é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            className="form-select"
            {...register("categoria")}
          >
            <option value="Bebidas">Bebidas</option>
            <option value="Comidas">Comidas</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Salvar Produto
        </Button>
      </form>
    </main>
  );
}

export default AdicionarProduto;
