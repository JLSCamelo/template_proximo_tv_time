import { useEffect, useState } from "react";
import { buscarSeriesPorNome } from "../services/tvmaze";

// Recebe o termo digitado e devolve os resultados da busca, já com
// debounce (espera a pessoa parar de digitar por 400ms antes de
// chamar a API, pra não disparar uma requisição a cada letra).
export function useBuscaSeries(termo) {
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const termoLimpo = termo.trim();

    if (termoLimpo.length < 2) {
      setResultados([]);
      setCarregando(false);
      return;
    }

    setCarregando(true);

    const temporizador = setTimeout(async () => {
      try {
        const encontrados = await buscarSeriesPorNome(termoLimpo);
        setResultados(encontrados.slice(0, 5));
      } catch (e) {
        setResultados([]);
      } finally {
        setCarregando(false);
      }
    }, 400);

    // Se a pessoa digitar de novo antes dos 400ms, cancela a busca
    // anterior. É esse cleanup que faz o debounce funcionar.
    return () => clearTimeout(temporizador);
  }, [termo]);

  return { resultados, carregando };
}
