import Poster from "./Poster";

export default function GradePosters({ series, comLegenda = false }) {
  return (
    <div className={`grade-posters${comLegenda ? " catalogo" : ""}`}>
      {series.map((serie) => (
        <Poster key={serie.id} {...serie} comLegenda={comLegenda} />
      ))}
    </div>
  );
}
