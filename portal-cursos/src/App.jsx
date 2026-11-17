import { NavLink, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio.jsx";
import Cadastro from "./pages/Cadastro.jsx";

export default function App() {
  return (
    <div className="container">
      <header>
        <div className="brand">
          <span className="brand-badge">ATP</span>
          <strong>Academia Tech Palmas</strong>
        </div>

        <nav aria-label="Menu principal">
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/cadastro">Cadastro</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<p>Página não encontrada.</p>} />
        </Routes>
      </main>

      <footer>
        Academia Tech Palmas &bull; Formação em Tecnologia e Desenvolvimento Web
      </footer>
    </div>
  );
}