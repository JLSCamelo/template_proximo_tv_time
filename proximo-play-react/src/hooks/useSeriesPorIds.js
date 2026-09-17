import { useEffect, useState } from "react";
import { buscarVariasSeries } from "../services/tvmaze";

// Hook reutilizável: recebe uma lista de ids do TVmaze e devolve as
// séries já carregadas, um indicador de carregamento e um de erro.
// Usado em Descobrir.jsx e Catalogo.jsx para preencher as grades de pôsteres.
export function useSeriesPorIds(ids) {
  const [series, setSeries] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function carregar() {
      setCarregando(true);
      setErro(null);

      try {
        const resultado = await buscarVariasSeries(ids);
        if (!cancelado) {
          setSeries(resultado);
        }
      } catch (e) {
        if (!cancelado) {
          setErro("Não foi possível carregar as séries agora.");
        }
      } finally {
        if (!cancelado) {
          setCarregando(false);
        }
      }
    }

    carregar();

    // Evita atualizar o estado se o componente já desmontou
    // (ex: usuário trocou de página antes da resposta chegar).
    return () => {
      cancelado = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(ids)]);

  return { series, carregando, erro };
}
