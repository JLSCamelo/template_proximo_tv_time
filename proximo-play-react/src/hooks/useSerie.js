import { useEffect, useState } from "react";
import { buscarSeriePorId } from "../services/tvmaze";

// Usado em src/pages/Serie.jsx para carregar os dados completos
// de uma única série a partir do id vindo da URL (useParams).
export function useSerie(id) {
  const [serie, setSerie] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function carregar() {
      setCarregando(true);
      setErro(null);

      try {
        const resultado = await buscarSeriePorId(id);
        if (!cancelado) {
          setSerie(resultado);
        }
      } catch (e) {
        if (!cancelado) {
          setErro("Não foi possível carregar essa série agora.");
        }
      } finally {
        if (!cancelado) {
          setCarregando(false);
        }
      }
    }

    carregar();

    return () => {
      cancelado = true;
    };
  }, [id]);

  return { serie, carregando, erro };
}
