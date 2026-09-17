// Camada de acesso à API do TVmaze (https://www.tvmaze.com/api).
// Toda chamada fetch do projeto passa por aqui, então se a API mudar
// ou algo precisar de tratamento extra, só se mexe neste arquivo.

const URL_BASE = "https://api.tvmaze.com";

async function buscarJson(caminho) {
  const resposta = await fetch(`${URL_BASE}${caminho}`);

  if (!resposta.ok) {
    throw new Error(`Falha ao buscar dados na API (status ${resposta.status})`);
  }

  return resposta.json();
}

// Converte o formato retornado pela API para o formato que os
// componentes já esperam (id, titulo, imagem), o mesmo formato usado
// no mock da Parte 2, então os componentes não precisam mudar.
function normalizarShow(show) {
  return {
    id: show.id,
    titulo: show.name,
    imagem:
      show.image?.medium ??
      show.image?.original ??
      "/imagens/dark.jpg", // imagem de reserva para séries sem pôster na API
    generos: show.genres,
    nota: show.rating?.average ?? null,
    resumo: show.summary ?? "",
    linguagem: show.language,
  };
}

export async function buscarSeriePorId(id) {
  const show = await buscarJson(`/shows/${id}`);
  return normalizarShow(show);
}

export async function buscarVariasSeries(ids) {
  const resultados = await Promise.all(
    ids.map((id) =>
      buscarSeriePorId(id).catch(() => null) // se uma falhar, não derruba as outras
    )
  );
  return resultados.filter(Boolean);
}

export async function buscarSeriesPorNome(termo) {
  const resultados = await buscarJson(`/search/shows?q=${encodeURIComponent(termo)}`);
  // a busca retorna [{ score, show }], então precisamos extrair o show de cada item
  return resultados.map((item) => normalizarShow(item.show));
}
