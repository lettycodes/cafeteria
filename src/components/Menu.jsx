import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import logo from "../assets/logo.png"

function Menu() {
  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container fluid>
          <Link to="/">
            <img
              src={logo}
              width="32"
            />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {usuario && (
                <Link className="nav-link" to="/produtos">
                  Produtos
                </Link>
              )}
              {!usuario && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
              {!usuario && (
                <Link className="nav-link" to="/cadastro">
                  Cadastro
                </Link>
              )}
              {usuario && (
                <span className="text-light nav-link">
                  {usuario.displayName}
                </span>
              )}
              {usuario && (
                <Button variant="outline-light" onClick={handleLogout}>
                  Sair
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Menu;
