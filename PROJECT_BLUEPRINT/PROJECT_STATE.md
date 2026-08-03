# IABRACADABRA — Estado Técnico do Projeto

---

# Documento

PROJECT_STATE.md

---

# Versão

1.2

---

# Status

Consolidado

---

# Nota de Status

Este documento é a fotografia técnica consolidada do projeto — representa o que existe hoje, não o histórico de sessões. Para o registro cronológico de sessões e checkpoints, ver `CONTINUIDADE.md`.

`PROJECT_BLUEPRINT/00_MASTER_CONTROL.md` está vazio no disco; este documento não o substitui e deverá ser revisado para alinhamento formal assim que o Master Control for reconstruído.

---

# Classificação

Fotografia Técnica do Projeto

---

# Fase do Projeto

**Fase 1 — Concluída:** fundação técnica, arquitetura, documentação, frontend inicial das dez seções narrativas, integração dos primeiros assets reais, pipeline no GitHub, GitHub Pages e primeira publicação pública.

**Fase 2 — Em andamento:** o foco passa a ser o Experience System, refinamento visual, microinterações, motion design, parallax, carrosséis, Workspace, vídeos definitivos (Hero Loop, Demo Reel), experiência premium e evolução narrativa. Ver `CONTINUIDADE.md` para o detalhamento cronológico e o roadmap completo.

---

# Publicação

- Repositório GitHub: `https://github.com/Randolfoai/iabracadabra-presentation` (remote `origin`).
- GitHub Pages publicado, com deploy automático via GitHub Actions a cada push em `main`.
- Workflow: `.github/workflows/deploy-pages.yml` — checkout, Node.js 20, `npm ci` e `npm run build` em `FRONTEND/`, upload de `FRONTEND/out` como artifact, publicação via `actions/deploy-pages`.
- **URL pública oficial:** `https://randolfoai.github.io/iabracadabra-presentation/`.
- `next.config.ts`: `output: "export"`, `basePath`/`assetPrefix` (`/iabracadabra-presentation`, apenas em produção), `trailingSlash: true`. Caminhos de mídia hardcoded (raw `<img>`/`<source>`, fora do pipeline de `next/image`) tornados relativos para resolver corretamente sob o subdiretório publicado.

---

# Stack Utilizada

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (configuração CSS-first via `@theme`, sem `tailwind.config.ts`)
- Nenhuma biblioteca de animação.
- Nenhuma biblioteca de ícones externa.
- Nenhum backend, nenhuma API integrada, nenhum banco de dados.

---

# Arquitetura do Frontend

Página única (`/`) que monta as dez seções narrativas em sequência, seguindo a arquitetura de Landing Page e o Storytelling em 10 atos aprovados.

Três camadas de componentes:

- `components/sections/` — as dez áreas narrativas (uma por ato).
- `components/ui/` — Design Foundation reutilizável (containers, tipografia, botões, etc.).
- `components/media/` — camada de mídia do Hero e placeholders genéricos de mídia.

Conteúdo textual centralizado em `content/copy.ts`, isolado dos componentes visuais. Tema fixo escuro (sem alternância clara/escura), tokens definidos em `globals.css`.

---

# Estrutura de Diretórios (FRONTEND/)

```
FRONTEND/
├── public/
│   └── media/
│       ├── brand/
│       │   └── iabracadabra-wordmark.svg
│       ├── hero/
│       │   ├── hero-opening-frame.webp
│       │   └── hero-opening-frame-mobile.webp
│       ├── sections/
│       │   ├── how-it-works-confirmation-field.webp
│       │   └── product-vision-agency.webp
│       ├── icons/       (vazio, preparado para mídia futura)
│       ├── reel/        (vazio, preparado para mídia futura)
│       └── textures/    (vazio, preparado para mídia futura)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   ├── ui/
│   │   └── media/
│   └── content/
│       └── copy.ts
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── next.config.ts
```

A árvore de `public/media/` permanece sem alterações desde a última verificação — nenhum asset novo foi adicionado.

Na raiz do repositório (fora de `FRONTEND/`), o workflow de publicação está em `.github/workflows/deploy-pages.yml` (ver seção "Publicação").

---

# Componentes Existentes

**`components/sections/`** (uma por ato do Storytelling):
`HeroExperience`, `Tensao`, `Reframe`, `ComoFunciona`, `Diferenciais`, `ParaQuemE`, `VisaoDeProduto`, `DemoReel`, `Cta`, `Footer`.

**`components/ui/`** (Design Foundation):

| Componente | Papel |
|---|---|
| `Container` | Sistema de containers; larguras `content` (max-w-6xl, padrão) e `reading` (max-w-2xl). |
| `Section` | Sistema de seções; padding vertical padrão, tom `default`/`inverted`. |
| `Headline` | Sistema de headlines; tamanhos `display`/`headline`/`title`, tag semântica configurável. |
| `Eyebrow` | Sistema de overlines (rótulo acima de headlines). |
| `Paragraph` | Sistema de parágrafos; tom `default`/`muted`. |
| `Button` | Sistema de botões; variantes `primary`/`secondary`. |
| `Link` | Sistema de links. |
| `List` / `ListItem` | Sistema de listas. |
| `Card` | Sistema de cards vazios. |
| `Divider` | Sistema de divisores. |
| `Icon` | Sistema de ícones — apenas estrutura de tamanho/cor, sem glyphs. |
| `Grid` | Grid responsivo (2/3/4 colunas). |
| `SafeArea` | Sistema de áreas seguras (`env(safe-area-inset-*)`). |
| `index.ts` | Barrel de exportação de toda a Design Foundation. |

**`components/media/`**:

| Componente | Papel |
|---|---|
| `HeroMedia` | Camada de mídia do Hero: poster responsivo (`<picture>`) + vídeo em loop com fontes desktop/mobile, com fallback progressivo (opacidade 0 até carregar), verificação de cache do navegador (`posterRef.current?.complete`) e respeito a `prefers-reduced-motion`. |
| `MediaPlaceholder` | Placeholder genérico para mídia ainda não produzida ou já integrada. Aceita `src`/`alt` opcionais para exibir um asset real por cima do placeholder; o rótulo de texto permanece visível sem `src` ou em caso de falha de carregamento (`onError`), e é ocultado automaticamente assim que o asset real termina de carregar (`onLoad`). Usado em `ComoFunciona`, `VisaoDeProduto` (com asset real) e `DemoReel` (ainda sem asset real). |

---

# Assets Existentes

**Reais, integrados e em uso:**

- `FRONTEND/public/media/hero/hero-opening-frame.webp` — poster do Hero (desktop).
- `FRONTEND/public/media/hero/hero-opening-frame-mobile.webp` — poster do Hero (mobile).
- `FRONTEND/public/media/brand/iabracadabra-wordmark.svg` — wordmark oficial da marca.
- `FRONTEND/public/media/sections/how-it-works-confirmation-field.webp` — mídia de Como Funciona.
- `FRONTEND/public/media/sections/product-vision-agency.webp` — mídia de Visão de Produto.

**Aguardados pelo código, ainda não existentes:**

- `FRONTEND/public/media/hero/hero-loop-desktop.webm`
- `FRONTEND/public/media/hero/hero-loop-desktop.mp4`
- `FRONTEND/public/media/hero/hero-loop-mobile.webm`
- `FRONTEND/public/media/hero/hero-loop-mobile.mp4`

**Sem referência ativa no código até que exista (removida deliberadamente):**

- `FRONTEND/public/media/sections/demo-reel-poster.webp` — o Demo Reel exibe o `MediaPlaceholder` sem `src` até que este asset seja produzido.

**Diretórios preparados, ainda vazios:**

- `FRONTEND/public/media/icons/`
- `FRONTEND/public/media/reel/`
- `FRONTEND/public/media/textures/`

---

# Documentos Existentes

| Documento | Papel |
|---|---|
| `README.md` | Porta de entrada do repositório. |
| `CONTINUIDADE.md` | Checkpoint operacional e histórico de sessões. |
| `DOCS/AI_COLLABORATION.md` | Regras de colaboração humano-IA e Workflow de Desenvolvimento oficial. |
| `PROJECT_BLUEPRINT/00_MASTER_CONTROL.md` | Vazio — pendente de reconstrução após a entrega comercial. |
| `PROJECT_BLUEPRINT/01_PRODUCT_STORYTELLING.md` | Storytelling completo em 10 atos, status Temporary Working Draft. |
| `PROJECT_BLUEPRINT/PROJECT_STATE.md` | Este documento — fotografia técnica consolidada. |

---

# Estado do Hero

- Estrutura full-viewport (`min-h-[100svh]`), com respeito a `env(safe-area-inset-*)` para notch/mobile.
- Poster real integrado via `<picture>`, com variantes desktop (`hero-opening-frame.webp`) e mobile (`hero-opening-frame-mobile.webp`, selecionada por `<source media="(max-width:640px)">`), com fallback progressivo (opacidade 0 até carregar).
- Poster resiliente a cache do navegador: além do `onLoad`, um `useEffect` verifica `posterRef.current?.complete` para cobrir o caso em que a imagem já está em cache e o evento `onLoad` não dispara.
- Vídeo em loop estruturado para quatro fontes (`hero-loop-desktop.webm/mp4`, `hero-loop-mobile.webm/mp4`, selecionadas por media query); nenhum dos quatro arquivos existe ainda — o vídeo permanece invisível (opacidade 0) até que existam, sem quebrar o layout.
- Fallback de `prefers-reduced-motion` implementado em `globals.css` (`.hero-video { display: none }`).
- Wordmark oficial (SVG real) integrado, preservando proporção, transparência e nitidez — sem rasterização, sem recriação da marca.
- Área segura editorial (`py-20 sm:py-32`) ao redor do conteúdo textual.
- Indicador discreto de rolagem presente.

---

# Integrações Realizadas

1. `hero-opening-frame.webp` como poster real do Hero (desktop).
2. `iabracadabra-wordmark.svg` como wordmark oficial da marca, substituindo o texto provisório.
3. Reestruturação das fontes de vídeo do Hero de um par único para quatro variantes desktop/mobile (aguardando os arquivos reais).
4. `hero-opening-frame-mobile.webp` como poster real do Hero (mobile), integrado via `<source>` de `<picture>`.
5. Correção de cache do poster do Hero (`posterRef.current?.complete` em `useEffect`).
6. `how-it-works-confirmation-field.webp` como mídia real de Como Funciona, via `MediaPlaceholder`.
7. `product-vision-agency.webp` como mídia real de Visão de Produto, via `MediaPlaceholder` (layout da seção ajustado para texto + mídia).
8. `MediaPlaceholder` estendido com `src`/`alt`: rótulo de texto ocultado automaticamente após carregamento bem-sucedido do asset real, permanecendo visível sem `src` ou em caso de falha de carregamento.
9. Remoção da referência a `demo-reel-poster.webp` em `DemoReel.tsx` (arquivo inexistente) — o `MediaPlaceholder` do Demo Reel permanece sem `src` até que o asset real seja produzido.

---

# Decisões Permanentes

- Proposta central: "Organizamos todo o fluxo de produção visual da sua agência." — imutável.
- Assinatura da marca: "IABRACADABRA — Produção Criativa Ilimitada." — imutável.
- Tema sempre escuro; não há alternância clara/escura.
- Hero desktop e Hero mobile são versões dirigidas separadamente do mesmo filme — nunca crop automático.
- Nenhuma biblioteca de animação ou de ícones externa até decisão em contrário.
- Nenhum backend, API ou banco de dados antes de autorização explícita do Autor do Projeto.
- Stack fixada em Next.js 16 / React 19 / TypeScript / Tailwind CSS v4 — não retroceder para versões mais antigas por suposição.
- Inteligência Artificial nunca é citada como ferramenta, modelo ou fornecedor na interface, nem tratada como protagonista da comunicação.

---

# Convenções Adotadas

- Pastas de primeiro nível do repositório em UPPER_SNAKE_CASE.
- Documentos do Blueprint nomeados `NN_NOME_DOCUMENTO.md` (dois dígitos sequenciais).
- Um componente React por arquivo, em PascalCase.
- Tokens de design centralizados em `globals.css` via CSS custom properties, mapeados no bloco `@theme inline` do Tailwind v4.
- Extensões de componentes existentes devem preservar o comportamento padrão (props novas com valor-padrão retrocompatível), para não afetar seções já aprovadas.
- Assets de mídia real seguem o caminho `public/media/<categoria>/<nome-do-arquivo>`.
- Conteúdo textual das seções centralizado em `content/copy.ts`, nunca hardcoded diretamente nos componentes de seção.

---

# Workflow Oficial de Desenvolvimento

```
Implementação
↓
Lint
↓
Build
↓
Execução Local
↓
Validação Funcional
↓
Atualização do CONTINUIDADE.md
↓
git status
↓
Commit
↓
Push
```

Toda funcionalidade deve seguir este fluxo antes de ser considerada concluída. Commit e push exigem autorização explícita do Autor do Projeto em cada ocorrência — nunca são executados por padrão. Ver `DOCS/AI_COLLABORATION.md` para o registro oficial deste workflow.

---

# Estado de Qualidade e Git (última verificação)

- **Lint:** `npm run lint` aprovado, sem erros e sem warnings.
- **Build:** `npm run build` aprovado, sem erros, geração estática completa (`FRONTEND/out/` gerado com sucesso, incluindo `index.html`).
- **Branch principal:** `main`.
- **Último commit:** `363de2a` — "ci: configure GitHub Pages deployment".
- **Working tree:** limpo.
- **Remote:** `origin` configurado — `https://github.com/Randolfoai/iabracadabra-presentation.git`. Local e remoto sincronizados (`main` e `origin/main` no mesmo commit).
- **Publicação:** apresentação publicada em `https://randolfoai.github.io/iabracadabra-presentation/`, com deploy automático via GitHub Actions a cada push em `main`.
- Para o detalhamento cronológico de sessões e o histórico completo de commits, ver `CONTINUIDADE.md`.
