import { Link } from "react-router-dom";

export default function Poster({ id, titulo, imagem, comLegenda = false }) {
  return (
    <figure className="poster">
      <Link to={`/serie/${id}`}>
        <img
          src={imagem}
          alt={`Pôster de ${titulo}`}
          title={titulo}
          width="210"
          height="315"
        />
      </Link>
      {comLegenda && <figcaption>{titulo}</figcaption>}
    </figure>
  );
}
