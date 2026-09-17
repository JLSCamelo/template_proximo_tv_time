import { Link } from "react-router-dom";

export default function BlogCard({ href, imagem, titulo }) {
  return (
    <Link className="blog-card" to={href}>
      <img src={imagem} alt="" />
      <h3>{titulo}</h3>
    </Link>
  );
}
