# Arquitetura Inicial — Price Watcher

Este documento apresenta uma visão inicial da arquitetura do Price Watcher.
A arquitetura poderá evoluir durante o desenvolvimento do projeto.

## Frontend

Responsável pela interface utilizada pelo usuário.

Principais responsabilidades:

- exibir os produtos monitorados;
- permitir o cadastro de produtos;
- permitir a definição de um preço máximo;
- exibir o preço atual e o status do monitoramento;
- permitir editar, pausar ou excluir produtos;
- apresentar mensagens de sucesso e erro.

## Backend

Responsável pelo processamento das regras do sistema.

Principais responsabilidades:

- receber e processar os dados enviados pelo frontend;
- gerenciar usuários e produtos monitorados;
- realizar as verificações periódicas de preço;
- obter o preço atual dos produtos monitorados;
- comparar o preço atual com o preço máximo definido;
- registrar o histórico de preços;
- determinar quando um alerta deve ser enviado;
- solicitar o envio das notificações por e-mail.

A forma de obtenção dos preços do Mercado Livre ainda será definida durante
o desenvolvimento, podendo envolver uma API ou a coleta de informações
disponíveis na página do produto.

## Banco de Dados

Responsável por armazenar permanentemente os dados necessários para o
funcionamento do sistema.

Entre os dados armazenados estão:

- informações dos usuários;
- produtos monitorados;
- URLs dos produtos;
- preços máximos definidos;
- status dos monitoramentos;
- histórico das verificações de preço.

## Serviços externos

### Mercado Livre

Fonte das informações dos produtos monitorados, incluindo o preço atual.

### Serviço de e-mail

Responsável pela entrega dos alertas de preço aos usuários.

## Visão geral

Usuário
↓
Frontend
↓
Backend
├── Banco de Dados
├── Mercado Livre
└── Serviço de e-mail

O frontend é responsável pela interação com o usuário, enquanto o backend
processa as regras do sistema, consulta os preços e acessa os dados
persistidos no banco de dados.