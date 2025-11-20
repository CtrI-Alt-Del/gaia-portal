---
title: Modelo de Dados
description: Esquema detalhado do banco de dados PostgreSQL utilizado pelo Projeto Gaia.
---

# Modelo de Dados (PostgreSQL)

Este documento detalha o esquema do banco de dados relacional (PostgreSQL) utilizado pelo Projeto Gaia. Ele armazena os dados processados e estruturados, como informações das estações, parâmetros, medições e os alertas gerados.

---

## Diagrama Entidade-Relacionamento (DER)

O banco de dados é composto pelas seguintes tabelas principais:

- **Station** (Estação)
- **Parameter_Type** (Tipo de Parâmetro)
- **Parameter** (Parâmetro)
- **Measure** (Medição)
- **Alarm** (Alarme/Regra)
- **Alert** (Alerta/Evento)
- **Users** (Usuários)

---

## Descrição das Tabelas

### Station (Estação)

Armazena as informações de localização e status de cada estação de monitoramento física.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **id** | bigint | Identificador único da estação (PK) |
| **uuid** | text | Identificador universal único para comunicação IoT |
| **latitude** | float | Coordenada de latitude da estação |
| **longitude** | float | Coordenada de longitude da estação |
| **address** | text | Endereço físico ou descrição da localização |
| **inactive** | boolean | Flag de status (false = ativa, true = inativa) |
| **created_at** | timestamp | Data de criação do registro |
| **updated_at** | timestamp | Data da última atualização |

**Relacionamentos:**
- `Station.id` é referenciada por `Parameter.id_station` (Uma Estação pode ter múltiplos Parâmetros)

---

### Parameter_Type (Tipo de Parâmetro)

Tabela de consulta (lookup table) que define os tipos de dados que podem ser medidos (ex: "Temperatura", "Umidade do Ar", "Velocidade do Vento").

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **id** | bigint | Identificador único do tipo de parâmetro (PK) |
| **name** | varchar | Nome do tipo de parâmetro (ex: "Temperatura") |
| **json** | json | Metadados ou configurações extras em formato JSON |
| **offset** | float | Valor de offset para calibração ou ajuste da medição |

**Relacionamentos:**
- `Parameter_Type.id` é referenciada por `Parameter.id_type_parameter` (Um Tipo de Parâmetro pode ser usado em múltiplos Parâmetros)

---

### Parameter (Parâmetro)

Representa um sensor ou uma medição específica dentro de uma estação (ex: O sensor de "Temperatura" da "Estação A").

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **id** | bigint | Identificador único do parâmetro (PK) |
| **id_station** | bigint | FK que referencia `Station.id` |
| **id_type_parameter** | bigint | FK que referencia `Parameter_Type.id` |
| **created_at** | timestamp | Data de criação do registro |
| **updated_at** | timestamp | Data da última atualização |

**Relacionamentos:**
- `Parameter.id` é referenciada por `Measure.id_parameter` (Um Parâmetro pode ter múltiplas Medições)
- `Parameter.id` é referenciada por `Alarm.id_parameter` (Um Parâmetro pode ter múltiplas regras de Alarme)

---

### Measure (Medição)

Armazena cada dado bruto (processado) recebido de um parâmetro/sensor. Esta é a tabela principal de "fatos" do sistema.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **id** | bigint | Identificador único da medição (PK) |
| **id_parameter** | bigint | FK que referencia `Parameter.id` |
| **unit** | varchar | Unidade de medida (ex: "°C", "%", "mm") |
| **value** | float | O valor numérico da medição |
| **created_at** | timestamp | Data de criação (quando a medição foi registrada) |
| **updated_at** | timestamp | Data da última atualização |

**Relacionamentos:**
- `Measure.id` é referenciada por `Alert.id_measure` (Uma Medição específica pode gerar um Alerta)

---

### Alarm (Alarme / Regra)

Define as regras e os limites que disparam um alerta (ex: "Temperatura > 30.0").

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **id** | bigint | Identificador único da regra de alarme (PK) |
| **id_parameter** | bigint | FK que referencia `Parameter.id` (qual parâmetro monitora) |
| **operation** | enum | Operação de comparação (ex: '>', '<', '=', '!=') |
| **value** | float | Valor limite para a operação |
| **created_at** | timestamp | Data de criação da regra |
| **updated_at** | timestamp | Data da última atualização |

**Relacionamentos:**
- `Alarm.id` é referenciada por `Alert.id_alarm_type` (Uma Regra de Alarme pode gerar múltiplos Alertas)

---

### Alert (Alerta / Evento)

Registra um evento que ocorreu quando uma `Measure` violou uma regra de `Alarm`.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **id** | bigint | Identificador único do alerta gerado (PK) |
| **id_alarm_type** | bigint | FK que referencia `Alarm.id` (qual regra foi violada) |
| **id_measure** | bigint | FK que referencia `Measure.id` (qual medição disparou) |
| **date_alarm** | timestamp | Data e hora exata em que o alerta ocorreu |
| **severity** | enum | Nível de severidade ('low', 'medium', 'high') |
| **created_at** | timestamp | Data de criação do registro |
| **updated_at** | timestamp | Data da última atualização |

---

### Users (Usuários)

Armazena as contas de usuários que podem acessar a plataforma web.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **id** | bigint | Identificador único do usuário (PK) |
| **name** | varchar | Nome do usuário |
| **email** | varchar | Endereço de e-mail (usado para login) |
| **password** | text | Senha do usuário (armazenada como hash) |
| **inactive** | boolean | Flag de status (false = ativo, true = inativo) |
| **created_at** | timestamp | Data de criação da conta |
| **updated_at** | timestamp | Data da última atualização |

---

## Relacionamentos Principais

```
Station (1) ──────< (N) Parameter
Parameter_Type (1) ──────< (N) Parameter
Parameter (1) ──────< (N) Measure
Parameter (1) ──────< (N) Alarm
Measure (1) ──────< (N) Alert
Alarm (1) ──────< (N) Alert
```

---

## Exemplo de Consultas

### Buscar todas as medições de uma estação

```sql
SELECT m.*, pt.name as parameter_name
FROM Measure m
JOIN Parameter p ON m.id_parameter = p.id
JOIN Parameter_Type pt ON p.id_type_parameter = pt.id
WHERE p.id_station = 1
ORDER BY m.created_at DESC;
```

### Buscar alertas críticos recentes

```sql
SELECT a.*, al.operation, al.value, m.value as measured_value
FROM Alert a
JOIN Alarm al ON a.id_alarm_type = al.id
JOIN Measure m ON a.id_measure = m.id
WHERE a.severity = 'high'
ORDER BY a.date_alarm DESC
LIMIT 10;
```

### Listar estações ativas com seus parâmetros

```sql
SELECT s.*, pt.name as parameter_type
FROM Station s
JOIN Parameter p ON s.id = p.id_station
JOIN Parameter_Type pt ON p.id_type_parameter = pt.id
WHERE s.inactive = false;
```

---

## Índices Recomendados

Para otimizar as consultas mais frequentes:

```sql
CREATE INDEX idx_measure_parameter ON Measure(id_parameter);
CREATE INDEX idx_measure_created ON Measure(created_at);
CREATE INDEX idx_alert_severity ON Alert(severity);
CREATE INDEX idx_alert_date ON Alert(date_alarm);
CREATE INDEX idx_parameter_station ON Parameter(id_station);
```

---

## Próximos Passos

Agora que você conhece a estrutura de dados, explore como começar a usar o sistema:

[Voltar para Visão Geral →](/getting-started/introduction/overview)
