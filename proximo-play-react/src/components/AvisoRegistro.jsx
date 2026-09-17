import { Link } from "react-router-dom";
import { useAssistidos } from "../hooks/useAssistidos";

export default function AvisoRegistro() {
  const { assistidos } = useAssistidos();
  const ultimosRegistros = assistidos.slice(0, 3);

  return (
    <div id="aviso-registro" popover="auto">
      <h2>Seus episódios assistidos</h2>

      {assistidos.length === 0 ? (
        <p>
          Você ainda não registrou nenhum episódio. Abra a página de uma
          série e marque um episódio como assistido por lá.
        </p>
      ) : (
        <>
          <p>Total registrado: {assistidos.length}</p>
          <ul className="lista-assistidos">
            {ultimosRegistros.map((item) => (
              <li key={item.id}>
                <Link to={`/serie/${item.serieId}`}>
                  {item.titulo} · T{item.temporada}E{item.episodio}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <button type="button" popovertarget="aviso-registro" popovertargetaction="hide">
        Fechar
      </button>
    </div>
  );
}
