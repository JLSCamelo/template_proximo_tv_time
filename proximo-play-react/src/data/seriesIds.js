// A Parte 2 tinha título e imagem fixos no mock. Na Parte 3, a gente só
// guarda os ids curados (mesmos ids do TVmaze usados antes) e busca o
// resto (título, imagem, nota...) direto na API, através do hook
// useSeriesPorIds.

export const idsPopulares = [2993, 43687, 169, 53647, 82, 41748, 28826, 15299];
export const idsEmAlta = [44776, 116, 83946, 46065, 19, 526, 431, 82];
export const idsDestaques = [46065, 44458, 38052, 44776, 42062, 347, 43031, 83946];

// O blog continua sendo conteúdo editorial (texto escrito pelo grupo),
// então não faz sentido vir da API. Só a imagem/título de capa de cada
// post são resolvidos a partir do id da série correspondente.
export const blogPosts = [
  {
    id: "artigo-1",
    serieId: 15299,
    categoria: "PARA SUA PRÓXIMA SESSÃO",
    tituloArtigo: "Os episódios que marcaram a semana",
    resumo: "Uma seleção para quem gosta de descobrir novas histórias.",
  },
  {
    id: "artigo-2",
    serieId: 38052,
    categoria: "PARA SUA PRÓXIMA SESSÃO",
    tituloArtigo: "Qual será sua próxima maratona?",
    resumo: "Uma seleção para quem gosta de descobrir novas histórias.",
  },
  {
    id: "artigo-3",
    serieId: 46065,
    categoria: "PARA SUA PRÓXIMA SESSÃO",
    tituloArtigo: "A aventura está só começando",
    resumo: "Uma seleção para quem gosta de descobrir novas histórias.",
  },
  {
    id: "artigo-4",
    serieId: 83946,
    categoria: "PARA SUA PRÓXIMA SESSÃO",
    tituloArtigo: "Novas histórias para sua lista",
    resumo: "Uma seleção para quem gosta de descobrir novas histórias.",
  },
  {
    id: "artigo-5",
    serieId: 53647,
    categoria: "PARA SUA PRÓXIMA SESSÃO",
    tituloArtigo: "Mistérios para assistir sem spoilers",
    resumo: "Uma seleção para quem gosta de descobrir novas histórias.",
  },
  {
    id: "artigo-6",
    serieId: 82,
    categoria: "PARA SUA PRÓXIMA SESSÃO",
    tituloArtigo: "De volta aos Sete Reinos",
    resumo: "Uma seleção para quem gosta de descobrir novas histórias.",
  },
];
