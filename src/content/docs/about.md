---
title: Sobre o Projeto Gaia
description: Conheça o Projeto Gaia - Uma solução completa de monitoramento meteorológico desenvolvida pela equipe Ctrl Alt Del para a Tecsus.
template: splash
lastUpdated: 2025-11-14
head:
  - tag: style
    content: |
      .hero-bg { display: none !important; }
      .content-panel { max-width: 70rem !important; margin: auto; padding:1.5rem 0px !important; }
      #_top{
      text-align: center;
      font-size: 4rem;
      padding-bottom: 3rem;
      }
---

# 🌍 Bem-vindo ao Projeto Gaia

Este é o portal oficial do **Projeto Gaia**, uma solução completa de monitoramento meteorológico desenvolvida pela equipe **Ctrl Alt Del** para a **Tecsus**.

## Nossa Missão

Nosso objetivo é duplo:

- **Tecnológico**: Criar um sistema IoT de baixo custo para coleta e análise de dados ambientais
- **Educacional**: Transformar esses dados em uma ferramenta pedagógica para alunos do ensino médio, conscientizando sobre prevenção de desastres

Este portal centraliza toda a documentação essencial do projeto, desde a arquitetura técnica até os processos de trabalho da equipe.

---

## 1. O Desafio (A Dor do Cliente)

A Tecsus nos procurou com a necessidade estratégica de expandir seu portfólio para o monitoramento ambiental. O desafio era criar uma solução completa (hardware e software) que fosse:

### Requisitos do Cliente

- **Econômica**: De baixo custo para ser escalável
- **Completa**: Um desenvolvimento de ponta a ponta (end-to-end)
- **Pedagógica**: Servir como ferramenta de ensino para alunos
- **Validada**: Implementada em locais reais (escolas e faculdades)

Em resumo, a Tecsus precisava de um produto inovador, acessível e com forte apelo social.

---

## 2. A Solução (O Ecossistema Gaia)

Nossa proposta é um ecossistema integrado que se divide em três pilares:

### 🛰️ Hardware
Estações meteorológicas de baixo custo que monitoram:
- Velocidade e direção do vento
- Volume de chuva
- Umidade do ar
- Temperatura ambiente
- Pressão atmosférica

### 🔄 Infraestrutura de Dados
Um fluxo robusto de dados utilizando:
- **Broker MQTT (HiveMQ)** para comunicação IoT
- **MongoDB** para armazenamento de dados brutos
- **PostgreSQL** para dados processados
- **Jobs periódicos** para tratamento de dados (a cada 10 minutos)

### 🖥️ Software (Portal Web)
Uma plataforma que oferece:
- **Dashboards técnicos** para a Tecsus com métricas e análises
- **Interface educacional** que apresenta os dados de forma didática para estudantes e professores
- **Sistema de alertas** baseado em condições climáticas de risco
- **Relatórios personalizados** para análise de padrões meteorológicos

---

## 3. Nossos Diferenciais

### 💰 Custo-Benefício
Atingimos o baixo custo usando componentes acessíveis e software open-source, tornando a solução escalável para múltiplas instalações.

### 🔧 Abordagem Holística
Entregamos uma solução end-to-end, do sensor físico à interface web, incluindo toda a infraestrutura de comunicação e processamento de dados.

### 🎓 Foco no Engajamento
O portal educacional transforma um produto técnico em uma ferramenta de **Aprendizagem Baseada em Problemas (PBL)**, engajando estudantes do ensino médio em questões reais de clima e segurança.

### ✅ Validação em Campo
Os protótipos implementados em ambientes reais (escolas e faculdades) garantem a eficácia e usabilidade do produto antes da escala.

---

## 4. Informações Gerais do Produto

| Informação | Detalhes |
|------------|----------|
| **Nome do Projeto** | Gaia |
| **Equipe Responsável** | Ctrl Alt Del |
| **Cliente** | Tecsus |
| **Público-Alvo** | Tecsus, alunos e professores do ensino médio, comunidades locais |

### Tecnologias Utilizadas

#### Hardware e IoT
- Sensores meteorológicos (DHT22, BMP280, pluviômetro, anemômetro)
- Microcontroladores
- Protocolo de comunicação MQTT via HiveMQ

#### Backend
- **Node.js** com framework **NestJS**
- **MongoDB** para dados brutos
- **PostgreSQL** para dados processados
- **Prisma** como ORM

#### Frontend
- **Remix** (framework React)
- **Tailwind CSS** para estilização
- **Astro** com **Starlight** para documentação

#### Infraestrutura e DevOps
- **Docker** para containerização
- **Terraform** para Infrastructure as Code
- **Git** para versionamento
- **CI/CD** para deploy automático

---

## 🧭 Navegação Rápida

Acesse rapidamente as seções principais da nossa documentação:

- **[Visão Geral](/getting-started/introduction/overview)**: Entenda o ecossistema completo do Gaia
- **[Entregáveis](/getting-started/introduction/deliverables)**: O que estamos construindo
- **[Requisitos](/getting-started/introduction/requirements)**: Requisitos funcionais e não funcionais
- **[Arquitetura](/getting-started/introduction/architecture)**: Como os componentes se comunicam
- **[Modelo de Dados](/getting-started/introduction/data-model)**: Estrutura do banco de dados

---

## Equipe Ctrl Alt Del

Somos uma equipe dedicada de desenvolvedores comprometidos em criar soluções tecnológicas com impacto social. O Projeto Gaia representa nossa visão de como a tecnologia pode ser usada para educar e proteger comunidades.

### Nossos Valores

- **Inovação Social**: Tecnologia a serviço da sociedade
- **Código Aberto**: Transparência e colaboração
- **Excelência Técnica**: Qualidade em cada linha de código
- **Educação**: Compartilhar conhecimento e empoderar pessoas

---

**Desenvolvido com ❤️ pela equipe Ctrl Alt Del para Tecsus**

*Transformando dados climáticos em conhecimento e segurança.*