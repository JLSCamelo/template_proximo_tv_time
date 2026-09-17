import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Descobrir from "./pages/Descobrir";
import Catalogo from "./pages/Catalogo";
import Blog from "./pages/Blog";
import Serie from "./pages/Serie";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Descobrir />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="blog" element={<Blog />} />
        {/* Rota dinâmica: cada série tem sua própria página, identificada pelo id do TVmaze */}
        <Route path="serie/:id" element={<Serie />} />
      </Route>
    </Routes>
  );
}
