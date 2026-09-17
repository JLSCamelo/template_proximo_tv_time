# Take One

Catálogo de séries construído com React + Vite, consumindo dados em tempo real da API pública do [TVmaze](https://www.tvmaze.com/api).

## Integrantes do grupo

- `Arthur Machado Romão - RM:568878`
- `Henrique Ferreira de Amorim - 570740`
- `Julia Lopes Da Silva Camelo - RM: 574139`
- `Vinicius Ribeiro Silva Romão - 564379 `

## Problema

O **TV Time** foi, por cerca de uma década, um dos aplicativos mais populares para acompanhar séries e filmes: permitia registrar episódios assistidos, avaliar conteúdos, descobrir onde assistir e interagir com uma comunidade de fãs. Em julho de 2026, a empresa encerrou as atividades por inviabilidade financeira de manter um app gratuito — o app saiu das lojas, o site saiu do ar e todos os dados dos usuários foram apagados, sem possibilidade de recuperação.

Isso deixou um vácuo: milhões de pessoas perderam, de uma hora para outra, a ferramenta que usavam para lembrar em que episódio pararam, decidir o que assistir a seguir e descobrir novas séries — sem nenhuma alternativa gratuita e simples para preencher esse espaço imediatamente.

## Solução

O **Take One** é um MVP web que recria o núcleo do que o TV Time oferecia:

- descoberta de séries populares/em alta a partir de dados reais (API pública, sem necessidade de conta ou chave de acesso);
- página de detalhe de cada série com sinopse, gêneros e nota;
- registro de episódios assistidos por temporada/episódio, guardado localmente no navegador — sem backend, sem cadastro e sem depender de uma empresa manter um servidor no ar.

Não é uma reconstrução completa do TV Time, e sim um recorte focado em duas das funcionalidades mais usadas do app original: **descobrir o que assistir** e **lembrar o que já foi assistido**.

## Tecnologias

- **React 18** + **Vite 5**
- **React Router DOM 6** — rotas: `/`, `/catalogo`, `/blog`, `/serie/:id`
- **lucide-react** — ícones

## API usada

[TVmaze API](https://www.tvmaze.com/api) — API pública e gratuita de dados de séries de TV (sem necessidade de chave de acesso). Consumida inteiramente em `src/services/tvmaze.js`, que expõe três funções: busca de uma série por id, busca de várias séries por uma lista de ids e busca por nome (usada no campo de pesquisa).

## Funcionalidades

- **Grades de séries** (Descobrir/Catálogo) carregadas em tempo real via API do TVmaze, a partir de listas de ids curados (`src/data/seriesIds.js`).
- **Página de detalhe da série** (`/serie/:id`) com dados reais: sinopse, gêneros, nota, e formulário para registrar episódios assistidos.
- **Busca no cabeçalho** com debounce de 400ms, mostrando até 5 resultados em um dropdown.
- **Registro de episódios assistidos**, persistido no `localStorage` do navegador e sincronizado entre componentes (cabeçalho e página da série) via evento customizado.
- **Blog editorial**: conteúdo escrito pelo grupo, com capa/título das séries relacionadas.

## Uso de IA

`Apoio de um assistente de IA (Claude) na geração e organização desta documentação, na definição da nova paleta de cores, e na revisão da estrutura de código já existente. Usada também para correção e revisão de erros gerados conforme o desenvolvimento manual do projeto.

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

### Imagens do blog

As capas dos posts do blog (`src/pages/Blog.jsx` e `src/pages/Descobrir.jsx`) usam imagens estáticas em `public/imagens/poster-{id-da-serie}.jpg` — precisam ser adicionadas manualmente, não vêm da API.

## Paleta de cores

Tema escuro com um único tom de destaque, trocado do turquesa original por um coral/âmbar — mantém a mesma lógica de "fundo quase preto + um destaque só" da versão anterior, sem repetir a cor de nenhum concorrente direto (Netflix usa vermelho, TV Time usava azul, TMDB usa turquesa):

| Variável CSS | Cor | Uso |
|---|---|---|
| `--fundo` | `#14121b` | Fundo geral (preto com leve tom violeta) |
| `--texto` | `#f5f2f0` | Texto principal |
| `--suave` | `#b8aec2` | Texto secundário/placeholder (lavanda acinzentado, harmoniza com o destaque) |
| `--destaque` | `#ef7d5b` | Cor de marca: logo, links, foco, botão "Registrar" |
| `--destaque-forte` | `#ff9573` | Hover do destaque |
| `--destaque-texto` | `#1a1420` | Texto sobre fundo de destaque (contraste) |

## Referências e inspiração de layout

O layout não copia um único site, mas a estrutura do cabeçalho e das grades de conteúdo se aproxima do padrão usado pelo **Netflix**:

- Cabeçalho com logo à esquerda, navegação central, busca, sino de notificações e avatar de perfil (com seta de dropdown) à direita — mesma organização do cabeçalho autenticado do Netflix.
- Conteúdo dividido em seções horizontais por categoria ("Populares", "Em alta", "Em destaque"), cada uma com um link para ver a lista completa — mesmo padrão de "fileiras por categoria" do catálogo do Netflix.
- Pôsteres em proporção retrato (2:3) organizados em grade densa.

A funcionalidade central — registrar episódios assistidos por temporada/episódio — é a referência direta ao **TV Time**, cuja ausência motivou este projeto (ver seção "Problema").
