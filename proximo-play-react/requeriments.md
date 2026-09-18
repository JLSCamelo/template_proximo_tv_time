# Requisitos do Projeto — Take One

## 1. O que é o projeto?
O **Take One** é um site para apaixonados por séries descobrirem novas produções e marcarem os episódios que já assistiram. Ele foi criado como uma alternativa simples para cobrir o espaço deixado pelo fim do aplicativo TV Time. O sistema roda direto no navegador, puxa as informações de uma API pública de séries e salva o progresso do usuário no próprio computador.

---

## 2. Requisitos Funcionais

- **RF-01 - Vitrine Inicial:** Mostra listas de séries divididas em "Populares", "Em alta" e "Em destaque" logo na página inicial.
- **RF-02 - Catálogo Geral:** Página dedicada com a lista completa de séries e os títulos visíveis para facilitar a navegação.
- **RF-03 - Detalhes da Série:** Página individual mostrando a imagem de capa, nota, gêneros, resumo da história e o formulário de episódios.
- **RF-04 - Busca de Séries:** Campo de busca no topo do site que pesquisa séries pelo nome na API do TVmaze enquanto a pessoa digita.
- **RF-05 - Marcador de Episódios:** Formulário dentro da página da série para o usuário digitar a temporada e o episódio assistido. Ao salvar, o número do episódio avança sozinho para o próximo.
- **RF-06 - Histórico e Remoção:** Lista de episódios já marcados naquela série, com opção de apagar qualquer item da lista.
- **RF-07 - Resumo de Assistidos:** Um aviso acionado no botão "Registrar" do topo que mostra quantos episódios no total a pessoa já marcou e os 3 últimos com link direto.
- **RF-08 - Blog do Grupo:** Seção de artigos com matérias sobre séries, usando a capa da série correspondente.

---

## 3. Requisitos Não Funcionais

- **RNF-01 - Sem Banco de Dados / Sem Backend:** O histórico de episódios fica salvo apenas no navegador do usuário usando `localStorage`.
- **RNF-02 - API Gratuita e Externa:** Os dados das séries vêm da API pública do TVmaze, sem precisar de chaves pagas ou cadastradas.
- **RNF-03 - Busca Inteligente:** Para não sobrecarregar a API a cada letra digitada, a busca espera a pessoa parar de digitar por 400ms e exige pelo menos 2 letras.
- **RNF-04 - Layout Responsivo:** O site funciona bem no celular, tablet e computador.
- **RNF-05 - Tratamento de Erros e Textos Limpos:** As sinopses vindas da API têm suas tags HTML removidas antes de ir pra tela, e séries sem capa usam uma imagem padrão do projeto. Se a internet cair ou a API falhar, o site exibe uma mensagem avisando o usuário em vez de quebrar a tela.

---

## 4. Regras do Sistema

- **RN-01:** Nenhuma área do site exige cadastro, login ou senha.
- **RN-02:** O campo de sugestões da busca no topo mostra no máximo 5 séries por vez.
- **RN-03:** A lista de episódios salvos se atualiza em tempo real em todas as partes da tela.