# Shelf Hub

Uma plataforma para organizar e acompanhar conteúdos culturais consumidos e planejados.

## Sobre o projeto

O Shelf Hub nasceu para resolver um problema comum: a dificuldade de manter tudo relacionado ao consumo cultural em um único lugar. Filmes, séries, livros, músicas, jogos, animes, documentários e outros conteúdos costumam ficar espalhados em diferentes apps, plataformas e anotações pessoais.

Com o Shelf Hub, o usuário pode centralizar seu histórico cultural em uma biblioteca pessoal, acompanhar o que já assistiu, leu ou ouviu, registrar o que pretende consumir e manter um controle mais organizado de suas experiências.

## Problema que resolve

Muitas pessoas consomem conteúdos em vários formatos e plataformas ao mesmo tempo, mas não têm uma ferramenta prática para:

- registrar tudo o que já consumiram;
- acompanhar o que está em andamento;
- guardar itens planejados;
- avaliar e comentar sobre obras;
- encontrar conteúdos rapidamente;
- visualizar padrões de consumo ao longo do tempo.

O projeto busca criar um espaço único para organização, acompanhamento e análise do histórico cultural pessoal.

## Objetivo

O objetivo do Shelf Hub é oferecer uma biblioteca pessoal centralizada para que o usuário possa:

- cadastrar conteúdos culturais;
- organizar sua coleção e histórico;
- acompanhar o status de cada obra;
- registrar avaliações e comentários;
- favoritar itens importantes;
- pesquisar, filtrar e ordenar a biblioteca;
- consultar estatísticas básicas sobre seus hábitos de consumo.

## Funcionalidades

### MVP

O MVP do projeto contempla:

- cadastro de obras;
- edição de obras;
- exclusão de obras;
- controle de status;
- biblioteca pessoal;
- pesquisa;
- filtros;
- ordenação;
- visualização de detalhes;
- favoritos;
- notas e avaliações;
- comentários;
- links externos;
- estatísticas básicas.

### Regras principais

- Uma obra pode estar como **Planejado**, **Em andamento**, **Consumido** ou **Abandonado**.
- Obras planejadas ou em andamento podem ser cadastradas sem avaliação.
- Notas e comentários ficam disponíveis somente após a obra ser marcada como **Consumido**.
- O usuário pode ter no máximo **20 favoritos**.
- A exclusão de uma obra exige confirmação.
- Links externos são adicionados manualmente no MVP.
- Integrações automáticas com serviços externos fazem parte de uma evolução futura.

## Status suportados

Cada obra pode ter um dos seguintes status:

- Planejado
- Em andamento
- Consumido
- Abandonado

## Tipos de conteúdo

O sistema considera diferentes tipos de conteúdo cultural, incluindo:

- Filme
- Série
- Anime
- Desenho/Animação
- Livro
- Álbum
- Palestra
- Podcast
- Videogame
- Documentário
- Música/Faixa
- HQ/Mangá
- Show/Stand-up
- Curso
- Exposição

## Público-alvo

O produto é pensado para pessoas que consomem diferentes tipos de conteúdo cultural e desejam manter um controle mais organizado da sua rotina de entretenimento, estudo e descoberta.

## Protótipo

O projeto possui um protótipo navegável desenvolvido no Figma:

[Visualizar protótipo navegável no Figma](https://www.figma.com/proto/qzzGhfapnxVoYsicLXboxt/Shelf-Hub?node-id=5-788&p=f&t=A6Dyj4L6kNFV6My3-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A7)

## Estrutura do repositório

```text
.
├── README.md
└── docs/
    ├── requisitos.md
    ├── historias-de-usuario.md
    ├── design-system.md
    └── arquitetura.md
