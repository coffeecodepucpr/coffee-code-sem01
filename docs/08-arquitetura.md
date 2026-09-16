# 08 — Arquitetura inicial

> Módulo anterior: `07-design-system.md` · Próximo: `desafios.md` e `entregavel.md`

Este módulo é voltado principalmente para os veteranos ⚡, mas todo mundo pode (e deveria) ler e começar a pensar nessas questões — mesmo sem programação ainda, algumas decisões começam a ficar mais claras agora que existem requisitos, telas e um design system.

## O que é

**Arquitetura de software** é a forma como as diferentes partes de um sistema são organizadas e se comunicam entre si. Antes de escrever uma linha de código, já é possível (e recomendável) ter uma primeira visão de como o sistema vai ser dividido.

Não estamos falando ainda de arquitetura avançada (padrões complexos, microsserviços, etc.) — só da visão inicial: quais grandes partes o sistema vai ter, e como elas conversam entre si.

## Por que pensamos nisso agora

Você já sabe, a esta altura da semana:
- Qual problema o sistema resolve (requisitos).
- Quem é o usuário e como ele interage com o sistema (UX/UI, protótipo).
- Como o sistema deve parecer visualmente (design system).

O que falta é uma primeira ideia de **como isso vai ser construído por trás das telas**. Ter essa visão agora, mesmo que simples, evita decisões de última hora nas próximas semanas, quando o código já estiver sendo escrito.

## Os conceitos principais

### Frontend

É a parte do sistema que o usuário vê e interage diretamente — as telas que você desenhou no Figma. É onde acontece a interface, a navegação, a exibição da informação.

### Backend

É a parte "invisível" para o usuário, que roda em um servidor, responsável por processar dados, aplicar regras de negócio e conversar com o banco de dados. Por exemplo: quando o usuário clica em "Participar" de um grupo, é o backend que verifica se o grupo ainda tem vaga, registra a participação, e devolve a resposta para o frontend mostrar.

### Banco de dados

É onde as informações do sistema ficam armazenadas de forma persistente — usuários, grupos, mensagens, o que for relevante para o seu projeto. Diferente de uma variável em memória, dados em um banco de dados continuam existindo mesmo depois que o sistema é reiniciado.

### Responsabilidades

Cada parte do sistema deveria ter uma responsabilidade clara. O frontend não deveria, por exemplo, decidir sozinho se um grupo está cheio ou não — essa é uma regra de negócio, responsabilidade do backend. Deixar claro "quem cuida do quê" evita que a mesma lógica fique duplicada (e, com o tempo, inconsistente) em partes diferentes do sistema.

### Organização de diretórios

Assim como você já pensou em uma estrutura de pastas para documentação (`/docs`), o código também vai precisar de uma organização. Uma estrutura inicial simples e comum:

```
projeto/
├── docs/
├── frontend/          # código das telas
├── backend/           # código do servidor / regras de negócio
├── README.md
└── .gitignore
```

Isso pode (e provavelmente vai) mudar conforme o projeto avança e a tecnologia escolhida define convenções próprias — mas ter uma primeira ideia já ajuda a organizar o pensamento.

### Comunicação entre as partes

Frontend e backend geralmente conversam através de requisições (por exemplo, o frontend pede "me dá a lista de grupos" e o backend responde com esses dados). Você não precisa saber ainda os detalhes técnicos dessa comunicação — só entender que ela existe e que é uma decisão de arquitetura: como as partes do sistema vão trocar informação entre si.

## Exemplo real

Para o app de grupos de estudo:

```
Usuário abre o app
      │
      ▼
  FRONTEND (tela de busca)
      │  "me mostra os grupos da matéria X"
      ▼
   BACKEND (recebe o pedido, busca no banco)
      │
      ▼
 BANCO DE DADOS (retorna os grupos daquela matéria)
      │
      ▼
   BACKEND (organiza a resposta)
      │
      ▼
  FRONTEND (exibe a lista de grupos na tela)
```

Cada seta representa uma comunicação entre partes. Cada caixa tem uma responsabilidade clara: o frontend não sabe *como* os dados são buscados no banco, só pede e exibe o resultado; o backend não sabe *como* a informação vai aparecer na tela, só entrega os dados.

## Como fazer

Você não precisa (nem deveria, nesta etapa) desenhar uma arquitetura completa e definitiva. O objetivo é uma primeira visão, sabendo que ela vai evoluir.

1. **Liste as grandes partes do seu sistema** — provavelmente frontend, backend e banco de dados, mas isso pode variar dependendo do projeto.
2. **Para cada parte, escreva uma frase sobre sua responsabilidade principal.**
3. **Desenhe (pode ser um diagrama simples em texto, como o exemplo acima) como essas partes se comunicam**, considerando pelo menos o fluxo principal que você já mapeou no módulo de UX/UI.
4. **Pense em uma estrutura inicial de pastas** para o código, mesmo que ainda não exista nenhum código.
5. **Documente tudo isso em `docs/arquitetura.md`.**

Sugestão de estrutura para `docs/arquitetura.md`:

```markdown
# Arquitetura Inicial

## Visão geral

[breve descrição de como o sistema é dividido]

## Partes do sistema

### Frontend
Responsabilidade:

### Backend
Responsabilidade:

### Banco de dados
Responsabilidade:

## Fluxo principal

[diagrama simples em texto ou descrição do fluxo de dados]

## Estrutura de pastas (inicial)

\`\`\`
projeto/
├── docs/
├── frontend/
├── backend/
└── README.md
\`\`\`

## Observações

Esta é uma primeira visão da arquitetura e pode (e deve) mudar conforme o projeto avança.
```

## 🌱 Se você está começando

Este módulo pode parecer abstrato se você nunca programou — e está tudo bem. Nesta semana, o mais importante é entender que um sistema tem partes diferentes com responsabilidades diferentes, e que pensar nisso antes de programar ajuda a organizar melhor o trabalho depois. Você não precisa escrever um `docs/arquitetura.md` completo — um parágrafo simples descrevendo as partes do seu sistema já é um bom começo.

## ⚡ Se você já tem experiência

Aprofunde em:

- **Justifique escolhas tecnológicas iniciais**, se já tiver alguma ideia (por exemplo: "vamos usar React no frontend porque X", "banco relacional porque os dados têm relações claras entre usuários e grupos"). Não precisa ser definitivo, mas vale documentar o raciocínio.
- **Pense em pontos de extensão.** Se o projeto crescer (por exemplo, adicionar um app mobile além do site), a arquitetura atual aguentaria, ou exigiria retrabalho grande? Não precisa resolver isso agora, só ter consciência.
- **Considere a comunicação entre frontend e backend com mais detalhe** — mesmo em alto nível: será uma API REST? Vai haver autenticação? Isso não precisa estar implementado, só esboçado.
- **Divida responsabilidades dentro da equipe** de acordo com essa arquitetura — quem vai ficar mais próximo do frontend, quem do backend, sabendo que nas próximas semanas isso vira trabalho de verdade.

## Atividade

1. Liste as partes do seu sistema (frontend, backend, banco de dados, ou outras que fizerem sentido para o seu projeto).
2. Escreva a responsabilidade de cada parte em uma frase.
3. Desenhe (em texto mesmo, como no exemplo) o fluxo de dados do seu caso de uso principal.
4. Proponha uma estrutura inicial de pastas para o código.
5. Preencha `docs/arquitetura.md`, faça commit e push.

**Checklist do módulo:**

- [ ] Partes do sistema listadas com responsabilidades claras
- [ ] Fluxo de dados do caso de uso principal esboçado
- [ ] Estrutura inicial de pastas proposta
- [ ] `docs/arquitetura.md` preenchido, commitado e enviado
- [ ] ⚡ Veteranos: escolhas tecnológicas iniciais justificadas

---

Você concluiu todos os módulos de conteúdo da Semana 01. Agora veja `desafios.md` para desafios extras e `entregavel.md` para o checklist final antes de entregar.
