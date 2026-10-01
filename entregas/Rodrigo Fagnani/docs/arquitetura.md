# Arquitetura

## Visão geral

O FixAqui será dividido em três partes principais:

```text
Usuário
   ↓
Frontend
   ↓
Backend
   ↓
Banco de Dados
```

## Frontend

Responsável pela interface utilizada pelos clientes e profissionais.

Principais responsabilidades:

* Exibir os serviços disponíveis
* Permitir busca de profissionais
* Exibir perfis
* Permitir solicitação de serviços
* Exibir o status dos atendimentos

## Backend

Responsável pela lógica da aplicação.

Principais responsabilidades:

* Cadastro e login
* Cadastro de profissionais
* Cadastro de serviços
* Busca de profissionais
* Gerenciamento das solicitações
* Gerenciamento das avaliações

## Banco de Dados

Responsável pelo armazenamento das informações.

Principais dados:

* Usuários
* Profissionais
* Serviços
* Solicitações
* Avaliações

## Estrutura inicial

```text
Frontend
    |
    | HTTP/HTTPS
    ↓
Backend
    |
    ↓
Banco de Dados
```

## Possível evolução

Futuramente o sistema poderá possuir:

* Chat entre cliente e profissional
* Localização dos profissionais
* Sistema de favoritos
* Notificações
* Histórico de serviços
* Pagamentos
* Aplicativo mobile
