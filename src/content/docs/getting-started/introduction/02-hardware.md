---
title: Hardware e Estação
description: A estação meteorológica do Projeto Gaia
---

A estação meteorológica é o coração do Projeto Gaia - é ela que coleta todos os dados climáticos.

---

## O Que é a Estação

Um dispositivo autônomo que mede condições climáticas 24 horas por dia e envia os dados via internet.

**Características:**
- Funciona sozinha, sem precisar de pessoas
- Feita com componentes acessíveis
- Pode ser replicada por qualquer escola
- Código aberto e personalizável

---

## Componentes Principais

### Cérebro
Placa controladora que coordena tudo:
- Lê os sensores
- Processa os dados
- Envia para a nuvem

### Conectividade: Wi-Fi
Módulo ESP8266/ESP32 para conexão com internet.

### Os Sensores

**🌡️ Temperatura e Umidade**  
Mede o calor do ar e quanto vapor d'água existe

**🎚️ Pressão Atmosférica**  
Registra o "peso" do ar (ajuda prever tempo)

**🌬️ Vento**  
Anemômetro mede velocidade, biruta mede direção

**🌧️ Chuva**  
Pluviômetro conta quantos milímetros caíram

### Proteção

- Caixa resistente à água
- Bateria para não perder dados
- Painel solar (opcional)
- Suporte para fixar no telhado ou poste

---

## O Datalogger

É o software que faz tudo funcionar.

**O que ele faz:**
1. Lê os sensores a cada 10 minutos
2. Verifica se os dados fazem sentido
3. Guarda temporariamente se não tiver internet
4. Envia tudo para o sistema na nuvem

---

## Por Que Funciona

A estação é projetada para nunca perder dados:
- Se faltar internet, guarda localmente
- Se faltar energia, bateria mantém funcionando
- Se travar, reinicia sozinha
- Tudo é registrado para diagnóstico

---

## Próximos Passos

Entenda o que é o Portal Gaia:

[Ver Portal →](/getting-started/introduction/03-portal)

---
