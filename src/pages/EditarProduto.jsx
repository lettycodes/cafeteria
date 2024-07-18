import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProduto, updateProduto } from "../firebase/produtos";
import { useEffect } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function EditarProduto() {
  const { id } = useParams();
  const usuario = useContext(UsuarioContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  function carregarDado() {
    getProduto(id).then((produto) => {
      if (produto) {
        reset(produto);
      } else {
        navigate("/produtos");
      }
    });
  }

  function atualizarProduto(data) {
    updateProduto(id, data).then(() => {
      toast.success("Produto atualizado com sucesso!");
      navigate("/produtos");
    });
  }

  useEffect(() => {
    carregarDado();
  }, []);

  if (usuario === null) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(atualizarProduto)}>
        <h1>Editar Produto</h1>
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
          Atualizar Produto
        </Button>
      </form>
    </main>
  );
}

export default EditarProduto;
