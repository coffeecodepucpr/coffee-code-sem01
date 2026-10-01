# Requisitos — Price Watcher

## 1. Problema

Pessoas que desejam comprar um produto por um preço mais baixo precisam
consultar repetidamente páginas de produtos para verificar se houve alguma
redução de preço.

Esse processo exige verificações manuais frequentes e depende de o usuário
lembrar de acompanhar os produtos de seu interesse.

## 2. Público-alvo

Pessoas que realizam compras online e preferem aguardar promoções ou
reduções de preço antes de realizar uma compra.

## 3. Objetivo

Permitir que o usuário monitore o preço de produtos do Mercado Livre e seja
notificado quando um produto atingir o valor que está disposto a pagar,
reduzindo a necessidade de consultar manualmente a página do produto.

## 4. Requisitos Funcionais

### RF01 — Consultar preço

O sistema deve consultar o preço do produto por meio da URL cadastrada.

### RF02 — Armazenar histórico

O sistema deve armazenar o preço obtido em cada verificação realizada.

### RF03 — Criar usuário

O sistema deve permitir que o usuário crie uma conta.

### RF04 — Definir preço máximo

O sistema deve permitir que o usuário defina, opcionalmente, um preço máximo
desejado para um produto monitorado.

### RF05 — Enviar alerta

O sistema deve enviar um e-mail ao usuário quando o preço do produto atingir
ou ficar abaixo do preço máximo definido.

## 5. Requisito Não Funcional

### RNF01 — Periodicidade da verificação

O sistema deve realizar a verificação dos preços diariamente às 13h.

## 6. Regras de Negócio

### RN01 — Limite de produtos monitorados

Cada usuário pode possuir no máximo 3 produtos sendo monitorados
simultaneamente.

### RN02 — Preço máximo opcional

Um produto pode ser monitorado sem que o usuário defina um preço máximo.

### RN03 — Primeiro alerta de preço

O primeiro alerta por e-mail deve ocorrer quando o preço do produto atingir
ou ficar abaixo do preço máximo definido.

### RN04 — Novos alertas

Enquanto o preço permanecer igual ou abaixo do preço máximo definido, um
novo alerta deve ser enviado somente quando for detectada uma nova redução
no preço.

## 7. Escopo inicial

A primeira versão do Price Watcher terá como foco:

- monitoramento de produtos do Mercado Livre;
- uma URL para cada produto monitorado;
- até 3 produtos monitorados por usuário;
- armazenamento do histórico de preços;
- notificações por e-mail.

O histórico será armazenado pelo sistema, mas não será exibido ao usuário
nesta primeira versão.

Não fazem parte do escopo inicial:

- monitoramento de outras lojas;
- busca ou aplicação automática de cupons;
- gráficos de histórico de preços;
- notificações por WhatsApp ou outros aplicativos de mensagem.