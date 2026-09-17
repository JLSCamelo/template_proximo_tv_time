import { Link } from "react-router-dom";
import SecaoPosters from "../components/SecaoPosters";
import { useSeriesPorIds } from "../hooks/useSeriesPorIds";
import { idsPopulares, idsEmAlta, idsDestaques } from "../data/seriesIds";

export default function Catalogo() {
  const populares = useSeriesPorIds(idsPopulares);
  const emAlta = useSeriesPorIds(idsEmAlta);
  const destaques = useSeriesPorIds(idsDestaques);

  return (
    <>
      <Link className="voltar" to="/">
        ← Voltar ao início
      </Link>
      <h1>Catálogo de séries</h1>

      <SecaoPosters id="populares" titulo="Séries populares" series={populares.series} comLegenda />
      <SecaoPosters id="em-alta" titulo="Séries em alta" series={emAlta.series} comLegenda />
      <SecaoPosters id="destaques" titulo="Séries em destaque" series={destaques.series} comLegenda />
    </>
  );
}
