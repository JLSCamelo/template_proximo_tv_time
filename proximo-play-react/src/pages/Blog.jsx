import { Link } from "react-router-dom";
import { blogPosts } from "../data/seriesIds";

export default function Blog() {
  return (
    <div className="artigos">
      <Link className="voltar" to="/">
        ← Voltar ao início
      </Link>
      <h1>Blog</h1>
      <p className="introducao">Espaço editorial de demonstração para o grupo completar.</p>

      {blogPosts.map((post) => (
        <article key={post.id} id={post.id}>
          <img src={`/imagens/poster-${post.serieId}.jpg`} alt={`Pôster relacionado a ${post.tituloArtigo}`} />
          <div>
            <p className="categoria">{post.categoria}</p>
            <h2>{post.tituloArtigo}</h2>
            <p>{post.resumo}</p>
            <Link to={`/serie/${post.serieId}`} className="ver-todos">
              Ver detalhes da série <span aria-hidden="true">›</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
