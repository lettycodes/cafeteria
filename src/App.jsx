import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./pages/Produtos";
// import RemoverProduto from "./pages/RemoverProduto";
import AdicionarProduto from "./pages/AdicionarProduto";
import EditarProduto from "./pages/EditarProduto";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/adicionar" element={<AdicionarProduto />} />
          <Route path="/produtos/editar/:id" element={<EditarProduto />} />
          {/* <Route path="/produtos/remover/:id" element={<RemoverProduto />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
