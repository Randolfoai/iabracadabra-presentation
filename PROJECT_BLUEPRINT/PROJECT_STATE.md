# IABRACADABRA — Estado Técnico do Projeto

---

# Documento

PROJECT_STATE.md

---

# Versão

1.0

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
│       └── hero/
│           └── hero-opening-frame.webp
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
| `HeroMedia` | Camada de mídia do Hero: poster responsivo (`<picture>`) + vídeo em loop com fontes desktop/mobile, com fallback progressivo (opacidade 0 até carregar) e respeito a `prefers-reduced-motion`. |
| `MediaPlaceholder` | Placeholder genérico elegante para mídia ainda não produzida, usado em `ComoFunciona` e `DemoReel`. |

---

# Assets Existentes

**Reais, integrados e em uso:**

- `FRONTEND/public/media/hero/hero-opening-frame.webp` — poster do Hero (desktop).
- `FRONTEND/public/media/brand/iabracadabra-wordmark.svg` — wordmark oficial da marca.

**Aguardados pelo código, ainda não existentes:**

- `FRONTEND/public/media/hero/hero-opening-frame-mobile.webp`
- `FRONTEND/public/media/hero/hero-loop-desktop.webm`
- `FRONTEND/public/media/hero/hero-loop-desktop.mp4`
- `FRONTEND/public/media/hero/hero-loop-mobile.webm`
- `FRONTEND/public/media/hero/hero-loop-mobile.mp4`

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
- Poster real (desktop) integrado via `<picture>`, com fallback progressivo (opacidade 0 até `onLoad`); variante mobile do poster ainda pendente.
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
