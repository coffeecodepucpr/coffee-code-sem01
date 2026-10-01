\# Arquitetura — Shelf Hub



\## 1. Visão Geral



O Shelf Hub será uma plataforma para centralizar, organizar e acompanhar conteúdos culturais consumidos ou que o usuário pretende consumir.



A arquitetura inicial foi definida com foco em organização, separação de responsabilidades e possibilidade de evolução futura do sistema.



Neste momento, a arquitetura representa uma visão inicial do projeto. As tecnologias e detalhes de implementação poderão ser definidos e ajustados durante o desenvolvimento.



\---



\## 2. Estrutura Geral



O sistema será organizado inicialmente em três camadas principais:



```text

┌─────────────────────────────┐

│         Interface           │

│       Front-end / UI        │

├─────────────────────────────┤

│          Aplicação          │

│     Regras e funcionalidades│

├─────────────────────────────┤

│           Dados             │

│       Banco de dados        │

└─────────────────────────────┘

```



\### Interface



Responsável pela interação do usuário com o sistema.



Principais áreas:



\* Biblioteca

\* Cadastro de obra

\* Detalhes da obra

\* Pesquisa

\* Filtros

\* Ordenação

\* Favoritos

\* Estatísticas



A interface seguirá o Design System definido no documento `design-system.md`.



\### Aplicação



Responsável pelo funcionamento das principais funcionalidades e pelas regras de negócio.



Exemplos:



\* Cadastro de obras

\* Edição e exclusão

\* Alteração de status

\* Avaliação

\* Comentários

\* Favoritos

\* Pesquisa

\* Filtros

\* Ordenação

\* Estatísticas



\### Dados



Responsável pelo armazenamento das informações do sistema.



Entre os principais dados estão:



\* Obras

\* Tipos

\* Gêneros

\* Status

\* Avaliações

\* Comentários

\* Favoritos

\* Links externos

\* Datas

\* Informações relacionadas à biblioteca do usuário



\---



\## 3. Organização das Funcionalidades



As funcionalidades do Shelf Hub podem ser agrupadas da seguinte forma:



\### Biblioteca



Responsável pela visualização e organização das obras cadastradas.



Inclui:



\* Listagem de obras

\* Pesquisa

\* Filtros

\* Ordenação

\* Separação por tipo

\* Visualização de favoritos



\### Gerenciamento de Obras



Responsável pelo ciclo de vida das obras cadastradas.



Inclui:



\* Cadastrar

\* Editar

\* Excluir

\* Alterar status

\* Adicionar links externos



\### Avaliação e Registro



Responsável pelas informações relacionadas à experiência do usuário.



Inclui:



\* Nota em estrelas

\* Comentário

\* Data

\* Local ou plataforma onde consumiu

\* Favoritos



\### Estatísticas



Responsável pela apresentação de informações resumidas da biblioteca.



No MVP:



\* Total de obras

\* Quantidade por tipo

\* Quantidade por status

\* Média geral das avaliações

\* Média por tipo

\* Quantidade de obras consumidas em determinado período



\---



\## 4. Modelo Conceitual dos Dados



A estrutura inicial pode ser representada conceitualmente da seguinte forma:



```text

USUÁRIO

&#x20;  │

&#x20;  └── possui ──> BIBLIOTECA

&#x20;                   │

&#x20;                   └── contém ──> OBRA

&#x20;                                     │

&#x20;                   ┌─────────────────┼─────────────────┐

&#x20;                   │                 │                 │

&#x20;                 TIPO             GÊNERO            STATUS

&#x20;                   │

&#x20;                   └── avaliação ──> NOTA

&#x20;                   │

&#x20;                   └── comentário ─> COMENTÁRIO

&#x20;                   │

&#x20;                   └── favorito

&#x20;                   │

&#x20;                   └── links externos

```



A estrutura é conceitual e poderá ser ajustada durante a implementação do banco de dados.



\---



\## 5. Obra



A obra é a principal entidade do sistema.



Informações previstas:



\* Nome

\* Tipo

\* Gênero

\* Status

\* Data

\* Onde

\* Nota

\* Comentário

\* Favorito

\* Links externos



Nem todos os campos precisam estar preenchidos em todos os momentos.



Por exemplo, uma obra com status \*\*Planejado\*\* pode não possuir nota ou comentário.



\---



\## 6. Status da Obra



Cada obra poderá possuir um dos seguintes status:



\* Planejado

\* Em andamento

\* Consumido

\* Abandonado



O status poderá ser alterado pelo usuário conforme o andamento da obra.



Quando uma obra for marcada como \*\*Consumido\*\*, o usuário poderá registrar sua avaliação e comentário.



\---



\## 7. Regras de Negócio na Arquitetura



A aplicação deverá respeitar as principais regras definidas nos requisitos:



\* Uma obra pode ser cadastrada antes de ser consumida.

\* Obras planejadas podem não possuir nota ou comentário.

\* A nota só pode ser registrada após o consumo da obra.

\* O comentário sobre a experiência só pode ser registrado após o consumo.

\* Uma obra pode ser marcada como favorita.

\* Cada usuário poderá possuir no máximo 20 favoritos no MVP.

\* A exclusão de uma obra deve exigir confirmação.

\* Os dados da biblioteca devem estar associados ao usuário correspondente.



\---



\## 8. Fluxo Principal



O fluxo básico de utilização do sistema será:



```text

Usuário

&#x20;  ↓

Biblioteca

&#x20;  ↓

Pesquisar / Filtrar / Ordenar

&#x20;  ↓

Selecionar obra

&#x20;  ↓

Visualizar detalhes

&#x20;  ↓

Cadastrar / Editar / Alterar status

&#x20;  ↓

Avaliar / Comentar / Favoritar

```



Também será possível cadastrar uma nova obra diretamente pela área de cadastro.



\---



\## 9. Navegação Inicial



A estrutura inicial de navegação poderá conter:



```text

Shelf Hub

│

├── Biblioteca

│   ├── Todas as obras

│   ├── Favoritos

│   └── Filtros

│

├── Adicionar obra

│

├── Estatísticas

│

└── Detalhes da obra

```



A estrutura de navegação poderá ser refinada durante a criação do protótipo no Figma.



\---



\## 10. Evolução Futura



A arquitetura deverá permitir a inclusão de funcionalidades futuras, como:



\* Sistema de contas e autenticação

\* Recuperação de conta

\* Integrações automáticas com serviços externos

\* Compartilhamento de listas

\* Recursos sociais

\* Visualização de avaliações de outros usuários

\* Funcionalidade "Me Surpreenda"

\* Estatísticas avançadas

\* Gráficos

\* Exportação em CSV ou JSON

\* Informações específicas de cada tipo de conteúdo



Essas funcionalidades não fazem parte do MVP inicial.



\---



\## 11. Arquitetura no MVP



O MVP terá como foco:



```text

Cadastro

&#x20;  ↓

Biblioteca

&#x20;  ↓

Pesquisa / Filtros / Ordenação

&#x20;  ↓

Detalhes

&#x20;  ↓

Status

&#x20;  ↓

Avaliação / Comentário / Favorito

&#x20;  ↓

Estatísticas básicas

```



A arquitetura inicial prioriza uma estrutura simples e organizada, permitindo que novas funcionalidades sejam adicionadas posteriormente sem comprometer a organização do sistema.



\---



\## 12. Considerações Finais



A arquitetura apresentada representa a estrutura inicial do Shelf Hub para a primeira etapa do projeto.



As decisões relacionadas a linguagem de programação, framework, banco de dados, hospedagem, autenticação e integrações serão definidas posteriormente, durante a implementação.



O objetivo nesta etapa é estabelecer uma visão clara de como as principais partes do sistema estarão organizadas e como elas se relacionam.



