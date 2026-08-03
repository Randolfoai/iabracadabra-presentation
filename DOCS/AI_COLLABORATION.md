# Colaboração com Inteligência Artificial

## Propósito

Este documento descreve como ferramentas de Inteligência Artificial são utilizadas na construção e manutenção deste repositório, e quais regras governam essa colaboração.

## Papéis

**Autor do Projeto** — autoridade final de decisão sobre todo o conteúdo do repositório.

**IA responsável pela arquitetura de produto** — conduz decisões de arquitetura de produto e propostas de sequenciamento estratégico antes de serem formalizadas em documentação.

**IA responsável pela documentação e engenharia de repositório** — transforma decisões já tomadas em documentação técnica, realiza revisões estruturais e executa alterações de repositório aprovadas explicitamente pelo Autor do Projeto.

## Regras de Colaboração

Nenhuma IA está autorizada a tomar decisões finais de produto, arquitetura ou conteúdo sem aprovação explícita do Autor do Projeto.

Toda alteração estrutural do repositório — criação, remoção, movimentação ou renomeação de arquivos e pastas — deverá ser precedida de um plano apresentado ao Autor do Projeto, e somente executada após aprovação explícita.

Nenhuma IA está autorizada a realizar commit, push ou qualquer operação que publique alterações em um repositório remoto sem instrução explícita do Autor do Projeto.

Alterações de conteúdo em documentos já existentes deverão preservar decisões anteriores, salvo instrução explícita de revisão.

## Rastreabilidade

Alterações relevantes realizadas com auxílio de IA deverão ser identificáveis no histórico de mudanças do documento afetado, quando esse histórico existir.

## Workflow de Desenvolvimento

Toda funcionalidade implementada com auxílio de IA deverá seguir exatamente este fluxo antes de ser considerada concluída:

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

Nenhuma etapa deverá ser pulada ou reordenada. Commit e Push são as duas únicas etapas deste fluxo que exigem autorização explícita do Autor do Projeto em cada ocorrência — nenhuma IA deverá executá-las por padrão, mesmo após todas as etapas anteriores terem sido concluídas com sucesso.
