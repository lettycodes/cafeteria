import { Button, Modal } from "react-bootstrap";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { deleteProduto, getProduto } from "../firebase/produtos";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { useContext } from "react";

function RemoverProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const usuario = useContext(UsuarioContext);

  useEffect(() => {
    if (usuario) {
      getProduto(id).then((produto) => {
        if (produto) {
          setProduto(produto);
        } else {
          navigate("/produtos");
        }
      });
    }
  }, [id, usuario, navigate]);

  function deletarProduto() {
    deleteProduto(id).then(() => {
      toast.success("Produto removido com sucesso");
      navigate("/produtos");
    });
  }

  if (usuario === null) {
    return <Navigate to="/login" />;
  }

  return (
    <Modal show={showModal} onHide={() => navigate("/produtos")}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Remoção</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja remover o produto "{produto?.nome}"?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => navigate("/produtos")}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={deletarProduto}>
          Remover
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RemoverProduto;
