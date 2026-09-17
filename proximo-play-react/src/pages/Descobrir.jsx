import { Link } from "react-router-dom";
import SecaoPosters from "../components/SecaoPosters";
import BlogCard from "../components/BlogCard";
import { useSeriesPorIds } from "../hooks/useSeriesPorIds";
import { idsPopulares, idsEmAlta, idsDestaques, blogPosts } from "../data/seriesIds";

export default function Descobrir() {
  const populares = useSeriesPorIds(idsPopulares);
  const emAlta = useSeriesPorIds(idsEmAlta);
  const destaques = useSeriesPorIds(idsDestaques);

  return (
    <>
      <h1 className="visualmente-oculto">Descubra sua próxima série</h1>

      {populares.erro && <p role="alert">{populares.erro}</p>}
      <SecaoPosters
        id="populares"
        titulo={populares.carregando ? "Séries populares (carregando...)" : "Séries populares"}
        series={populares.series}
        verTodosHref="/catalogo#populares"
      />

      {emAlta.erro && <p role="alert">{emAlta.erro}</p>}
      <SecaoPosters
        id="em-alta"
        titulo={emAlta.carregando ? "Séries em alta (carregando...)" : "Séries em alta"}
        series={emAlta.series}
        verTodosHref="/catalogo#em-alta"
      />

      <section className="secao" id="blog" aria-labelledby="titulo-blog">
        <div className="titulo-secao">
          <h2 id="titulo-blog">Blog</h2>
          <Link className="ver-todos" to="/blog">
            Ver todos <span aria-hidden="true">›</span>
          </Link>
        </div>
        <div className="grade-blog">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              href={`/blog#${post.id}`}
              imagem={`/imagens/poster-${post.serieId}.jpg`}
              titulo={post.tituloArtigo}
            />
          ))}
        </div>
      </section>

      {destaques.erro && <p role="alert">{destaques.erro}</p>}
      <SecaoPosters
        id="destaques"
        titulo={destaques.carregando ? "Séries em destaque (carregando...)" : "Séries em destaque"}
        series={destaques.series}
        verTodosHref="/catalogo#destaques"
      />
    </>
  );
}
