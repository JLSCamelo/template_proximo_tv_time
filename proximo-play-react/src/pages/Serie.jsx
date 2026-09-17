import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSerie } from "../hooks/useSerie";
import { useAssistidos } from "../hooks/useAssistidos";

export default function Serie() {
  const { id } = useParams();
  const { serie, carregando, erro } = useSerie(id);
  const { assistidos, registrarEpisodio, removerRegistro } = useAssistidos();

  const [temporada, setTemporada] = useState("1");
  const [episodio, setEpisodio] = useState("1");

  const registrosDestaSerie = assistidos.filter((item) => String(item.serieId) === String(id));

  function aoRegistrar(evento) {
    evento.preventDefault();
    if (!serie) return;

    registrarEpisodio({
      serieId: serie.id,
      titulo: serie.titulo,
      imagem: serie.imagem,
      temporada: Number(temporada),
      episodio: Number(episodio),
    });

    setEpisodio((valor) => String(Number(valor) + 1)); // já deixa pronto pro próximo episódio
  }

  if (carregando) {
    return <p className="introducao">Carregando dados da série...</p>;
  }

  if (erro || !serie) {
    return (
      <>
        <Link className="voltar" to="/catalogo">
          ← Voltar ao catálogo
        </Link>
        <p role="alert">{erro ?? "Série não encontrada."}</p>
      </>
    );
  }

  return (
    <>
      <Link className="voltar" to="/catalogo">
        ← Voltar ao catálogo
      </Link>

      <article className="detalhe-serie">
        <img src={serie.imagem} alt={`Pôster de ${serie.titulo}`} width="210" />
        <div>
          <h1>{serie.titulo}</h1>
          {serie.nota && <p>Nota TVmaze: {serie.nota}</p>}
          {serie.generos?.length > 0 && <p>Gêneros: {serie.generos.join(", ")}</p>}
          {/* summary vem da API com tags HTML (<p>), então limpamos antes de exibir */}
          <p>{serie.resumo.replace(/<[^>]+>/g, "")}</p>
        </div>
      </article>

      <section className="secao" aria-labelledby="titulo-registro">
        <h2 id="titulo-registro">Registrar episódio assistido</h2>
        <form onSubmit={aoRegistrar} className="form-registro">
          <label>
            Temporada
            <input
              type="number"
              min="1"
              value={temporada}
              onChange={(evento) => setTemporada(evento.target.value)}
              required
            />
          </label>
          <label>
            Episódio
            <input
              type="number"
              min="1"
              value={episodio}
              onChange={(evento) => setEpisodio(evento.target.value)}
              required
            />
          </label>
          <button type="submit" className="registro">
            Marcar como assistido
          </button>
        </form>

        {registrosDestaSerie.length > 0 && (
          <ul className="lista-assistidos">
            {registrosDestaSerie.map((item) => (
              <li key={item.id}>
                T{item.temporada}E{item.episodio}
                <button type="button" onClick={() => removerRegistro(item.id)} aria-label="Remover registro">
                  remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
