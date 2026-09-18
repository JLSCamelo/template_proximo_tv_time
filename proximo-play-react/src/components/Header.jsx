import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bell, Search, ChevronDown } from "lucide-react";
import { useBuscaSeries } from "../hooks/useBuscaSeries";

export default function Header() {
  const [termoBusca, setTermoBusca] = useState("");
  const { resultados, carregando } = useBuscaSeries(termoBusca);

  return (
    <header className="cabecalho container">
      <Link className="logo" to="/">
        takeone
      </Link>
      <nav aria-label="Navegação principal">
        <details className="perfil">
          <summary>
            <span className="avatar" aria-hidden="true">●</span>
            <span>Ana</span>
            <ChevronDown className="seta" size={14} aria-hidden="true" />
          </summary>
          <div className="menu-perfil">
            Olá, Ana!
            <Link to="/#destaques">Explorar séries</Link>
          </div>
        </details>
        <span className="sino" aria-label="Notificações">
          <Bell size={17} aria-hidden="true" />
          <ChevronDown size={12} aria-hidden="true" />
        </span>
        <NavLink className="descobrir" to="/catalogo">
          Descobrir
        </NavLink>

        <div className="busca-container">
          <label className="busca">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar séries..."
              aria-label="Buscar séries"
              value={termoBusca}
              onChange={(evento) => setTermoBusca(evento.target.value)}
            />
          </label>

          {termoBusca.trim().length >= 2 && (
            <div className="resultados-busca" role="listbox">
              {carregando && <p className="resultado-busca-info">Buscando...</p>}
              {!carregando && resultados.length === 0 && (
                <p className="resultado-busca-info">Nenhuma série encontrada.</p>
              )}
              {resultados.map((serie) => (
                <Link
                  key={serie.id}
                  to={`/serie/${serie.id}`}
                  className="resultado-busca-item"
                  onClick={() => setTermoBusca("")}
                >
                  <img src={serie.imagem} alt="" width="32" height="48" />
                  {serie.titulo}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button className="registro" type="button" popovertarget="aviso-registro">
          Registrar
        </button>
      </nav>
    </header>
  );
}
