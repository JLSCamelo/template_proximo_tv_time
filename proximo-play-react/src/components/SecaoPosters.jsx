import { Link } from "react-router-dom";
import GradePosters from "./GradePosters";

export default function SecaoPosters({ id, titulo, series, verTodosHref, comLegenda = false }) {
  return (
    <section className="secao" id={id} aria-labelledby={`titulo-${id}`}>
      <div className="titulo-secao">
        <h2 id={`titulo-${id}`}>{titulo}</h2>
        {verTodosHref && (
          <Link to={verTodosHref} className="ver-todos">
            Ver todas <span aria-hidden="true">›</span>
          </Link>
        )}
      </div>
      <GradePosters series={series} comLegenda={comLegenda} />
    </section>
  );
}
