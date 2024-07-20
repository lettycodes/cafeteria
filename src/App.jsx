import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./pages/Produtos";
import AdicionarProduto from "./pages/AdicionarProduto";
import EditarProduto from "./pages/EditarProduto";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/adicionar" element={<AdicionarProduto />} />
            <Route path="/produtos/editar/:id" element={<EditarProduto />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </UsuarioContext.Provider>
    </div>
  );
}

export default App;
