# Histórias de Usuário — Price Watcher

## HU01 — Alerta por preço desejado

**Como** comprador online,  
**quero** definir o quanto estou disposto a pagar em um produto,  
**para** que eu possa receber uma notificação quando esse limite for atingido.

### Critérios de aceitação

- O usuário deve poder definir um preço máximo para o produto.
- O preço máximo deve ser opcional.
- Quando o preço do produto atingir ou ficar abaixo do preço máximo definido,
  o sistema deve enviar uma notificação ao usuário.

---

## HU02 — Monitoramento de produto

**Como** comprador online,  
**quero** informar o link do produto que desejo monitorar,  
**para** acompanhar suas alterações de preço sem precisar consultar a página
manualmente.

### Critérios de aceitação

- O usuário deve poder cadastrar uma URL de um produto do Mercado Livre.
- O sistema deve consultar diariamente o preço do produto cadastrado.
- O valor obtido em cada verificação deve ser armazenado.

---

## HU03 — Histórico de preços

**Como** comprador online,  
**quero** que os preços encontrados durante o monitoramento sejam armazenados,  
**para** que as alterações de preço do produto possam ser registradas ao longo
do tempo.

### Critérios de aceitação

- Cada verificação realizada deve registrar o preço encontrado.
- O registro deve estar associado ao produto monitorado.
- O histórico deve continuar sendo armazenado mesmo quando o produto não
  possuir um preço máximo definido.

> Nesta primeira versão, o histórico será armazenado pelo sistema, mas não será
> exibido ao usuário.