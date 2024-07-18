import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Produtos from "./pages/Produtos";
import RemoverProduto from "./pages/RemoverProduto";
import AdicionarProduto from "./pages/AdicionarProduto";
import EditarProduto from "./pages/EditarProduto";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/adicionar" element={<AdicionarProduto />} />
        <Route path="/produtos/editar/:id" element={<EditarProduto />} />
        <Route path="/produtos/remover/:id" element={<RemoverProduto />} />
      </Routes>
    </Router>
  );
}

export default App;
