import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import {
  deleteProduto,
  getProdutos,
  getProdutosUsuario,
} from "../firebase/produtos";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Produtos() {
  const [produtos, setProdutos] = useState(null);
  const usuario = useContext(UsuarioContext);

  const navigate = useNavigate();

  function carregarDados() {
    if (usuario) {
      getProdutosUsuario(usuario.uid).then((resultados) => {
        setProdutos(resultados);
      });
    }
  }

  function deletarProduto(id) {
    const deletar = window.confirm("Tem certeza que deseja remover o produto?");
    if (deletar) {
      deleteProduto(id).then(() => {
        toast.success("Produto removido com sucesso");
        carregarDados();
      });
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  if (usuario === null) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <Container className="mt-5">
        <h1>Seus produtos</h1>
        <hr />
        <Link className="btn btn-dark" to="/produtos/adicionar">
          Adicionar produto
        </Link>
        {produtos ? (
          <section className="mt-2">
            {produtos.map((produto) => {
              const precoFormatado = Number(produto.preco).toFixed(2);

              return (
                <Card key={produto.id}>
                  <Card.Body>
                    <Card.Title>{produto.nome}</Card.Title>
                    <Card.Text>{produto.descricao}</Card.Text>
                    <div className="mb-2">
                      <Badge bg="dark" className="me-2">
                        {produto.categoria}
                      </Badge>
                      <Badge bg="info" className="me-2">
                        R$ {isNaN(precoFormatado) ? "0.00" : precoFormatado}
                      </Badge>
                      <Badge bg="secondary" className="me-2">
                        Quantidade: {produto.quantidade}
                      </Badge>
                    </div>
                    <Button
                      variant="dark"
                      onClick={() => {
                        navigate(`/produtos/editar/${produto.id}`);
                      }}
                      className="me-2"
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deletarProduto(produto.id)}
                    >
                      Excluir
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </section>
        ) : (
          <Loader />
        )}
      </Container>
    </main>
  );
}

export default Produtos;
