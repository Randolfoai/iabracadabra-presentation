# IABRACADABRA

Repositório oficial do projeto IABRACADABRA.

A visão de produto, princípios e governança documental estão definidos em [`PROJECT_BLUEPRINT/00_MASTER_CONTROL.md`](PROJECT_BLUEPRINT/00_MASTER_CONTROL.md).

O checkpoint operacional mais recente do projeto — estado atual, últimas alterações e próximos passos — está em [`CONTINUIDADE.md`](CONTINUIDADE.md). Toda nova sessão de trabalho deve começar por esse arquivo.

## Estrutura do Repositório

| Pasta | Propósito |
|---|---|
| `PROJECT_BLUEPRINT/` | Documentos oficiais de produto: visão, estratégia, princípios e decisões normativas. |
| `RFC/` | Registros de decisões técnicas e arquiteturais de engenharia. |
| `DOCS/` | Documentação de repositório e engenharia (colaboração, processos internos). |
| `DESIGN/` | Arquivos-fonte e materiais de design produzidos (marca, logo, UI, UX). |
| `MEDIA/` | Materiais de produção e trabalho em andamento (imagens, vídeos, prompts, storyboards, referências). |
| `ASSETS/` | Entregáveis finais, aprovados e prontos para uso público ou reutilização (logotipo oficial, SVGs, ícones, favicons, imagens e vídeos finais). |
| `BACKEND/` | Reservado para a implementação do backend. Vazio até o início da fase de implementação. |
| `FRONTEND/` | Aplicação Next.js da apresentação comercial, em desenvolvimento ativo e já publicada (ver "Estado Atual" abaixo). |

## Estado Atual

A Fase 1 do projeto está concluída: fundação técnica, arquitetura, documentação, frontend inicial (Next.js 16 / React 19 / TypeScript / Tailwind CSS v4) e a primeira publicação pública da apresentação. A Fase 2, em andamento, tem como foco o Experience System, o refinamento visual e a evolução da experiência.

A apresentação está publicada via GitHub Pages em **[`https://randolfoai.github.io/iabracadabra-presentation/`](https://randolfoai.github.io/iabracadabra-presentation/)**, com deploy automático a cada push na branch `main` (workflow em [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)).

Para o estado técnico consolidado, ver [`PROJECT_BLUEPRINT/PROJECT_STATE.md`](PROJECT_BLUEPRINT/PROJECT_STATE.md). Para o histórico de sessões e os próximos passos, ver [`CONTINUIDADE.md`](CONTINUIDADE.md).

Nenhum backend, API ou banco de dados foi implementado até o momento.
