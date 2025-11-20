---
title: Requisitos do Projeto Gaia
description: Requisitos funcionais e não funcionais que orientam o desenvolvimento do sistema.
---

# Requisitos do Projeto Gaia

Este documento apresenta os requisitos funcionais (RF) e não funcionais (RNF) que guiam o desenvolvimento e a implementação do Projeto Gaia.

---

## Requisitos Funcionais

### RF1: Documentação da aplicação

Documento que explica todas as funcionalidades do sistema para consulta e treinamento de usuários.

**Características:**
- Deve ser disponibilizado por meio de uma "Central de ajuda" dentro da aplicação
- Aba lateral para consulta rápida
- Página com detalhes sobre determinada funcionalidade

---

### RF2: Gerenciamento de Estações

Cadastro de estações, gerenciamento de sensores, localização das áreas monitoradas.

**Características:**
- Página específica com uma tabela para exibição das estações
- Modal para criação e edição de estação
- Botão para desativar estações
- Aba para gerenciar os parâmetros das estações

---

### RF3: Gerenciamento de Parâmetros

Funcionalidades completas de criação, leitura, atualização e exclusão, garantindo que os usuários possam cadastrar novos registros, consultar informações existentes, modificar dados já armazenados e remover itens de forma segura e controlada.

**Características:**
- Página específica com uma tabela para exibição dos parâmetros
- Ícone personalizado de acordo com o tipo de parâmetro
- Modal para criação e edição de parâmetro
- Botão para desativar parâmetro

---

### RF4: Gerenciamento de Alarmes

Funcionalidades completas de criação, leitura, atualização e exclusão.

**Características:**
- Página específica com uma tabela para exibição dos alarmes
- Modal para criação e edição de alarme
- Botão para desativar alarme
- Deve especificar o valor de limite para disparo do alerta

---

### RF5: Gerenciamento de Alertas

Geração de alertas automaticamente com base em condições climáticas específicas.

**Características:**
- Deve ser disparado de acordo com os valores de limite especificados no alarme
- Atualizado em tempo real
- Deve ser visualizado no Dashboard e página de alerta
- Deve aparecer também como notificações

---

### RF6: Gerenciamento de Usuários

Cadastro de usuários, desativação, login e redefinição de senhas, controle de acesso para ações sensíveis (somente admin master).

**Características:**
- Página específica com uma tabela para exibição dos usuários
- Botão para desativar usuário
- Página de perfil para modificar as informações
- Redefinição de senha por email

---

### RF7: Recepção e Processamento dos Dados das Estações

Processamento e armazenamento dos dados enviados pelas estações meteorológicas, de forma a suportar quaisquer dados de quaisquer sensores.

#### RF7.1: Recepção de Dados
Os dados brutos enviados pelas estações precisam ser recebidos por um broker MQTT e salvos num banco de dados não relacional (BDNR).

#### RF7.2: Processamento de Dados
Após salvar os dados no BDNR, um servidor deve buscar e processar esses dados para utilização posterior, e salvar os dados num banco de dados relacional após o processamento. Esses dados só devem ser utilizados no front-end do sistema após o processamento, e em tempo real.

---

### RF8: Dashboards

Visualização interativa dos parâmetros meteorológicos.

**Características:**
- Página com métricas para análise rápida da situação referente às estações
- Gráfico de análise da quantidade de alertas por período de tempo
- Mapa com todas as estações cadastradas
- Card com os 5 alertas mais recentes
- Seção mostrando as medições recentes recebidas de todas as estações

---

### RF9: Gerenciamento de Relatórios

Relatórios baseados nos dados e parâmetros definidos no sistema para análises de risco meteorológico potencial.

**Características:**
- Relatórios em formato PDF
- Relatório deve ser gerado a partir dos dados de uma estação

---

### RF10: Desenvolvimento de Datalogger

Implementação de um datalogger para registrar dados em uma estação meteorológica.

**Características:**
- Deve registrar dados de múltiplos sensores (temperatura, umidade, pressão, velocidade e direção do vento, etc.)
- Deve ter capacidade de exportação de dados para o sistema

---

### RF11: Montagem de Estação Meteorológica

Construção física de uma estação meteorológica com os componentes necessários.

**Características:**
- Montagem da estação e testes de funcionamento (verificar se está ligando corretamente, verificar se está enviando dados, etc.)

---

### RF12: Landing Page explicativa

Desenvolvimento de um portal (página) explicativo sobre o funcionamento do sistema, o significado de cada parâmetro meteorológico medido, e o impacto social no monitoramento de risco.

**Características:**
- O portal irá descrever o funcionamento do sistema, o que são as estações, e quais os tipos de parâmetro lidos
- O portal deve ser atraente para todos os tipos de público, mas principalmente para o público na faixa etária da adolescência

---

### RF13: Confiabilidade operacional

Garantir que o sistema se mantenha ativo o tempo todo para não perder leituras de risco potencial.

**Características:**
- A infraestrutura do sistema deve ser capaz de armazenar e exibir todos os dados enviados pelas estações sem exceções
- A performance do sistema deve ser alta o suficiente para funcionar com 100 estações e 10 usuários simultâneos inicialmente

---

## Requisitos Não Funcionais

### RNF1: Experiência do Usuário (UX)

Garantir que o sistema priorize a usabilidade e a estética para melhor engajamento dos usuários.

---

### RNF2: Engajamento Público e Estudantil

Promover o interesse de estudantes do ensino médio e do público em geral pelo sistema de análise meteorológico, utilizando a aplicação prática de conceitos em um ambiente de resolução de problemas, destacando a importância da sua utilização para melhorar o monitoramento das áreas de risco e garantir a segurança dos moradores presentes nessa região.

---

### RNF3: Documentação de APIs

Documentação detalhada de todo o processo de desenvolvimento, produto e entregáveis, e práticas de DevOps.

---

### RNF4: Segurança dos dados

Garantir que os dados obedecerão à LGPD e CID da segurança de informação. Dados sensíveis no sistema não podem ser desativados por usuários comuns.

---

### RNF5: Pipeline de Integração Contínua (IC)

Implementação de um pipeline de IC para automação de testes e validações de código-fonte.

---

### RNF6: Deploy Automático

Configuração de processos automáticos de deploy para garantir atualizações consistentes do sistema.

---

### RNF7: Datalogger Funcional

Desenvolvimento e implementação de um datalogger capaz de coletar e registrar dados das estações meteorológicas de forma autônoma e eficiente, evitando perda de dados dos sensores.

---

### RNF8: Serviço de Recepção de Dados

Criação de um serviço robusto e escalável para a recepção e o processamento dos dados coletados pelas estações meteorológicas.

---

### RNF9: Controle de acesso

Implementação de um sistema de controle de acesso com, no mínimo, dois níveis de usuário (administrador e público), para gerenciar o acesso às informações e funcionalidades do sistema.

---

### RNF10: Aplicação de Conceitos Estatísticos

Integração de conceitos estatísticos nos dashboards e relatórios para enriquecer a análise dos dados meteorológicos coletados.

---

### RNF11: Definição dos processos da equipe e de desenvolvimento

Estabelecer e documentar os fluxos de trabalho e as metodologias a serem adotadas pela equipe, abrangendo tanto os processos internos quanto as etapas do ciclo de desenvolvimento do software.

---

### RNF12: Rastreabilidade de requisitos

Mapear e manter a ligação entre os requisitos, tarefas e User Storys, garantindo que todas as etapas do desenvolvimento estejam alinhadas e rastreáveis.

---

### RNF13: Configuração inicial dos repositórios do projeto

Criar o repositório de cada parte do projeto, bem como configurar as tecnologias auxiliares para desenvolvimento do código daquele repositório.

---

## Próximos Passos

Entenda como esses requisitos se traduzem em arquitetura:

[Ver Arquitetura do Sistema →](/getting-started/introduction/architecture)
