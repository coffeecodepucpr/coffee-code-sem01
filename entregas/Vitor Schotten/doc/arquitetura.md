# Arquitetura Inicial 

## 1. Visão geral

O sistema será inicialmente desenvolvido como uma aplicação web para organização de estudos.

A arquitetura poderá ser dividida em:

- **Frontend:** telas e interação com o estudante.
- **Backend:** regras de negócio, autenticação e gerenciamento das tarefas.
- **Banco de dados:** armazenamento de usuários, matérias e tarefas.

## 2. Principais entidades

### Usuário
- id
- nome
- login
- senha

### Matéria
- id
- nome
- usuário_id

### Tarefa
- id
- nome
- matéria_id
- prazo
- status
- usuário_id

## 3. Relações

Um usuário pode possuir várias matérias.

Uma matéria pode possuir várias tarefas.

Um usuário pode possuir várias tarefas.

## 4. Fluxo da aplicação

```text
Usuário
   |
   v
Login
   |
   v
Dashboard
   |
   +--> Minhas matérias
   |
   +--> Tarefas pendentes
   |
   +--> Tarefas concluídas
   |
   +--> Progresso
   |
   v
Adicionar tarefa
   |
   +--> Nome
   +--> Matéria
   +--> Prazo
   |
   v
Salvar
   |
   v
Tarefa pendente
```

## 5. Tecnologias

As tecnologias podem ser definidas conforme a implementação do projeto. Para um primeiro protótipo, HTML, CSS e JavaScript são suficientes. Caso o sistema seja posteriormente conectado a um backend, poderá ser utilizado PHP e um banco de dados relacional.

