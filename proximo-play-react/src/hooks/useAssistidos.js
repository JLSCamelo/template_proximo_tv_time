import { useEffect, useState } from "react";

const CHAVE_STORAGE = "proximoplay:assistidos";
const EVENTO_ATUALIZACAO = "proximoplay:assistidos-atualizado";

function lerDoStorage() {
  try {
    const salvos = localStorage.getItem(CHAVE_STORAGE);
    return salvos ? JSON.parse(salvos) : [];
  } catch (e) {
    return [];
  }
}

function salvarNoStorage(assistidos) {
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(assistidos));
  // Avisa outros componentes (ex: o popover do cabeçalho) que a lista mudou,
  // já que cada componente tem seu próprio useState e não compartilham
  // automaticamente o mesmo estado sem Context.
  window.dispatchEvent(new Event(EVENTO_ATUALIZACAO));
}

// Hook usado tanto na página da série (pra registrar um episódio) quanto
// no cabeçalho/popover (pra mostrar quantos episódios já foram registrados).
export function useAssistidos() {
  const [assistidos, setAssistidos] = useState(lerDoStorage);

  useEffect(() => {
    function sincronizar() {
      setAssistidos(lerDoStorage());
    }

    window.addEventListener(EVENTO_ATUALIZACAO, sincronizar);
    return () => window.removeEventListener(EVENTO_ATUALIZACAO, sincronizar);
  }, []);

  function registrarEpisodio({ serieId, titulo, imagem, temporada, episodio }) {
    const novoRegistro = {
      id: `${serieId}-t${temporada}e${episodio}-${Date.now()}`,
      serieId,
      titulo,
      imagem,
      temporada,
      episodio,
      data: new Date().toISOString(),
    };

    const atualizados = [novoRegistro, ...assistidos];
    setAssistidos(atualizados);
    salvarNoStorage(atualizados);
  }

  function removerRegistro(idRegistro) {
    const atualizados = assistidos.filter((item) => item.id !== idRegistro);
    setAssistidos(atualizados);
    salvarNoStorage(atualizados);
  }

  return { assistidos, registrarEpisodio, removerRegistro };
}
