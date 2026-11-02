# ⚽ Carreira de Futebol

Simulador de carreira de jogador de futebol, em português, que roda no navegador. Você cria um jogador, escolhe um ídolo real da sua posição e leva a carreira dos primeiros anos na base até a aposentadoria.

## Como jogar

Ao criar o jogador você define nome, posição, número, nacionalidade, **ano de nascimento** (de 2005 a 2016 — quanto mais cedo começar, mais tempo de carreira) e o **modo de dificuldade**:

| Modo | Evolução | Lesões | Propostas |
| --- | --- | --- | --- |
| Fácil | +35% | −55% | melhores |
| Normal | padrão | padrão | padrão |
| Difícil | −28% | +70% | piores |

Depois escolhe um **ídolo real** entre seis opções da sua posição (Alisson, Neuer, Van Dijk, Rodri, De Bruyne, Mbappé, Messi, Cristiano Ronaldo e outros). O ídolo dá +25% de treino permanente na habilidade dele. Em seguida vem a **super habilidade**, que dá um bônus maior em um atributo, e o primeiro clube.

Quem começa com menos de 16 anos fica preso na **categoria de base** do clube escolhido e só recebe propostas aos 15, assinando ao chegar aos 16.

A cada temporada você distribui 5 treinos e simula o ano. O jogo roda partida a partida e gera:

- **Tabela de pontos corridos** completa, com pontos, jogos, V/E/D e saldo de gols, destacando sua linha e as zonas de classificação e rebaixamento.
- **Mata-mata** da copa nacional, da competição continental (com fase de grupos) e da seleção, mostrando o caminho fase a fase com placares e decisões por pênaltis.
- **Tela de comemoração** em tela cheia a cada título ou prêmio individual conquistado.

## Conteúdo

Mais de 50 campeonatos de 40 países, com elencos em tamanho real (Premier League com 20 times, Brasileirão com 20, e assim por diante), acesso e rebaixamento entre divisões, competições continentais das cinco confederações, Mundial de Clubes e torneios de seleção.

## Rodar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

- `index.html` — estrutura da página.
- `src/main.js` — ponto de entrada; carrega o CSS e o jogo.
- `src/game.js` — dados dos campeonatos, motor de simulação e todas as telas.
- `src/style.css` — tema visual, componentes e layout responsivo.
- `.github/workflows/deploy.yml` — publica o site no GitHub Pages a cada push na `main`.

## Publicação

O site é construído e publicado automaticamente no GitHub Pages a cada push na branch `main`. O `vite.config.js` usa `base: './'` para que os caminhos funcionem na subpasta servida pelo Pages.
