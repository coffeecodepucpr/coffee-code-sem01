# Estom

O Estom é um sistema de monitoramento de preços criado para ajudar pessoas que
desejam acompanhar produtos online sem precisar verificar manualmente seus
preços todos os dias.

O projeto está sendo desenvolvido durante o Coffee & Code da PUCPR e será
evoluído ao longo das próximas semanas.

## Objetivo

A primeira versão do Estom será focada no monitoramento de produtos do
Mercado Livre.

O usuário poderá cadastrar produtos, definir opcionalmente um preço máximo
desejado e acompanhar a situação do preço em relação à meta definida.

Futuramente, o sistema também deverá realizar o monitoramento automático dos
preços e enviar alertas quando as condições definidas pelo usuário forem
atingidas.

## Estado atual

Atualmente, o frontend inicial da aplicação está implementado utilizando
HTML, CSS e JavaScript.

A interface possui:

- visualização dos produtos monitorados;
- diferentes estados em relação à meta de preço;
- formulário de cadastro através de modal;
- tema claro e escuro;
- layout responsivo para desktop e dispositivos móveis;
- navegação por teclado;
- padrões visuais definidos através de um Design System.

Os produtos e preços apresentados atualmente são dados de demonstração.

## Funcionalidades planejadas

- Cadastro de usuários;
- Cadastro de produtos para monitoramento;
- Monitoramento diário de preços;
- Definição opcional de preço máximo;
- Armazenamento do histórico de preços;
- Alertas por e-mail quando o preço desejado for atingido;
- Pausa, edição e exclusão de produtos monitorados.

## Tecnologias utilizadas

Nesta etapa do projeto foram utilizadas:

- HTML5;
- CSS3;
- JavaScript.

Novas tecnologias poderão ser adicionadas conforme a evolução da aplicação.

## Interface

A interface segue uma abordagem mobile-first e utiliza componentes e tokens
visuais documentados no Design System.

Também foram implementados temas claro e escuro, além de cuidados com
contraste, navegação por teclado e foco visível.

A interface foi auditada utilizando o Lighthouse e atingiu pontuação 100 na
categoria Accessibility.

## Protótipo

O fluxo inicial da aplicação foi desenvolvido no Figma.

[Acessar protótipo no Figma](https://www.figma.com/proto/oL9MehNA1Gea3Zhzh8I69z/Sem-t%C3%ADtulo?node-id=0-1&t=SoRcZQfwCZWOKUVi-1)

## Documentação

A documentação do projeto está disponível na pasta [`docs`](./docs).

Ela contém:

- [Requisitos](./docs/requisitos.md)
- [Histórias de usuário](./docs/historias-de-usuario.md)
- [Design System](./docs/design-system.md)
- [Arquitetura inicial](./docs/arquitetura.md)

## Estrutura do projeto

```text
price-watcher/
├── assets/
│   ├── css/
│   ├── images/
│   └── js/
├── docs/
├── index.html
└── README.md
```

## Status do projeto

Em desenvolvimento.

O Estom está sendo desenvolvido de forma incremental durante os encontros do
Coffee & Code da PUCPR.

## Escopo inicial

A primeira versão será focada no Mercado Livre.

Outras lojas e funcionalidades adicionais poderão ser consideradas em versões
futuras.