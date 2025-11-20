---
title: Entregáveis do Projeto Gaia
description: Detalhamento completo dos entregáveis funcionais e não funcionais do Projeto Gaia baseado na Ata de Requisitos.
---

# Entregáveis do Projeto Gaia

Este documento detalha os entregáveis funcionais e não funcionais do Projeto Gaia. Ele é a nossa **"fonte da verdade"** para o que deve ser construído, com base na Ata de Requisitos formalmente acordada entre o Cliente (Diogo Branquinho) e a equipe de desenvolvimento (Ctrl Alt Del).

Organizamos os entregáveis por áreas do projeto para facilitar a consulta.

---

## 🛰️ 1. Hardware e Coleta de Dados (A Estação)

Esta frente de trabalho envolve a criação do dispositivo físico de coleta.

### Construção Física
Devemos montar fisicamente uma estação meteorológica com todos os componentes necessários.

### Desenvolvimento do Datalogger
Precisamos implementar o software (datalogger) que irá registrar os dados na estação.

### Funcionalidade do Datalogger
O datalogger deve ser autônomo, eficiente e garantir que não haja perda de dados dos sensores.

---

## 🖥️ 2. Plataforma Web e Visualização (O Portal)

Esta é a interface principal onde os usuários interagem com os dados.

### Gerenciamento de Entidades (CRUDs)

#### Estações
A plataforma deve permitir o cadastro de estações, gerenciamento de seus sensores e localização.

#### Parâmetros
Deve ter funcionalidades completas de Criação, Leitura, Atualização e Exclusão (CRUD) para os parâmetros do sistema.

#### Alarmes
Deve ter funcionalidades completas de CRUD para as regras de alarme.

### Dados e Visualização

#### Dashboards
O sistema deve ter dashboards interativos para a visualização dos parâmetros meteorológicos.

#### Relatórios
Deve ser possível gerar relatórios baseados nos dados para análise de risco, com pelo menos três relatórios distintos.

#### Análise Estatística
Conceitos estatísticos devem ser aplicados nos dashboards e relatórios para enriquecer a análise.

#### Geração de Alertas
O sistema deve gerar alertas automaticamente com base nas condições climáticas definidas.

### Usuários e Acesso

#### Gerenciamento de Usuários
A plataforma deve permitir o cadastro, desativação, login e redefinição de senha.

#### Controle de Acesso
Deve haver controle de acesso para ações sensíveis (admin master) e, no mínimo, dois níveis de usuário (administrador e público).

---

## 🎓 3. Propósito Educacional e Social

Esta é a "alma" do projeto, focada no impacto além da tecnologia.

### Landing Page Explicativa
Devemos criar uma página que explique o funcionamento do sistema, o significado dos parâmetros e o impacto social do projeto.

### Engajamento Estudantil
A solução deve ser uma ferramenta de Aprendizado Baseado em Problemas (PBL) para fomentar o interesse de alunos do ensino médio.

### Design e UX
O design dos dashboards deve priorizar a usabilidade e a estética para garantir o engajamento.

---

## ⚙️ 4. Backend, Infraestrutura e Qualidade

Estes são os pilares não funcionais que garantem que o sistema funcione de forma robusta, segura e confiável.

### Serviços e APIs

#### Recepção de Dados
O backend deve ser capaz de processar e armazenar dados enviados de quaisquer sensores das estações.

#### Robustez do Serviço
O serviço de recepção de dados deve ser robusto e escalável.

#### Documentação da API
Todas as rotas da API devem ser detalhadamente documentadas, incluindo exemplos de uso.

### Segurança e Confiabilidade

#### Segurança dos Dados
O sistema deve obedecer à LGPD e aos princípios de CID (Confidencialidade, Integridade, Disponibilidade). Usuários comuns não podem desativar dados sensíveis.

#### Confiabilidade Operacional
O sistema deve permanecer ativo "o tempo todo" para não perder nenhuma leitura de risco potencial.

### DevOps e Documentação

#### Integração Contínua (IC)
Deve ser implementado um pipeline de IC para automação de testes e validações.

#### Deploy Automático (CD)
Devemos configurar processos automáticos de deploy para garantir atualizações consistentes.

#### Documentação Final
Deve ser entregue um documento que explique todas as funcionalidades do sistema, servindo como manual de consulta e treinamento.

---

## Próximos Passos

Agora que você conhece os entregáveis, explore os requisitos detalhados:

[Ver Requisitos Funcionais e Não Funcionais →](/getting-started/introduction/requirements)
