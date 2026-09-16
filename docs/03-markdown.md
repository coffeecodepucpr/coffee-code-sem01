# 03 — Markdown

> Módulo anterior: `02-github.md` · Próximo módulo: `04-requisitos.md`

## O que é

Markdown é uma forma simples de escrever texto formatado usando apenas símbolos do teclado — sem precisar de um editor visual tipo Word. Você já está lendo um arquivo Markdown agora: este `.md` usa `#` para títulos, `-` para listas e `**texto**` para negrito.

Por trás, esses símbolos são convertidos em formatação visual (títulos maiores, listas com marcadores, texto em negrito) sempre que o arquivo é exibido em um lugar que "entende" Markdown — como o GitHub, o Discord (parcialmente) ou editores como o VS Code.

## Por que usamos

Documentação de projeto precisa de três coisas: ser fácil de escrever, fácil de versionar (lembra do Git?) e fácil de ler tanto formatada quanto em texto puro. Markdown atende as três:

- **Fácil de escrever** — não precisa aprender uma linguagem de programação, só alguns símbolos.
- **Fácil de versionar** — é texto puro, então o Git consegue mostrar exatamente o que mudou entre uma versão e outra (diferente de um arquivo `.docx`, que o Git trata como uma caixa preta).
- **Fácil de ler** — mesmo sem formatação, um arquivo `.md` continua legível, porque os símbolos usados são discretos.

É por isso que o GitHub usa Markdown como padrão para `README.md` e para toda a documentação de projetos.

## Exemplo real

Um README mal escrito:

```
projeto de app
faz login e mostra perfil
rodar com npm start
```

O mesmo README em Markdown, formatado:

```markdown
# App do Coffee & Code

Aplicativo para conectar estudantes em grupos de estudo.

## Funcionalidades

- Login de usuário
- Visualização de perfil

## Como rodar

\`\`\`bash
npm install
npm start
\`\`\`
```

O segundo, quando visualizado no GitHub, aparece com título grande, lista com marcadores e o comando destacado em uma caixinha de código — tudo isso só com os símbolos certos, sem precisar clicar em nenhum botão de formatação.

## Como fazer — a sintaxe

### Títulos

```markdown
# Título principal (H1)
## Subtítulo (H2)
### Sub-subtítulo (H3)
```

Use apenas um `#` por documento para o título principal. Os demais níveis (`##`, `###`) organizam seções e subseções.

### Listas

Lista simples (com marcadores):

```markdown
- Item 1
- Item 2
- Item 3
```

Lista numerada:

```markdown
1. Primeiro passo
2. Segundo passo
3. Terceiro passo
```

### Links

```markdown
[texto do link](https://exemplo.com)
```

Exemplo: `[Site do Coffee & Code](https://exemplo.com)` vira → [Site do Coffee & Code](https://exemplo.com)

### Imagens

Quase igual ao link, com um `!` na frente:

```markdown
![texto alternativo](caminho-ou-url-da-imagem.png)
```

O "texto alternativo" aparece se a imagem não carregar, e também é usado por leitores de tela para acessibilidade — vale sempre preencher com uma descrição real da imagem.

### Código inline

Para destacar um comando ou trecho pequeno de código dentro de uma frase, use crases simples:

```markdown
Use o comando `git status` para ver o que mudou.
```

Isso vira: Use o comando `git status` para ver o que mudou.

### Blocos de código

Para trechos maiores, use três crases antes e depois, e pode indicar a linguagem:

````markdown
```bash
git init
git add .
git commit -m "primeiro commit"
```
````

Isso cria uma caixa de código com destaque de sintaxe (se a linguagem for reconhecida).

### Tabelas

```markdown
| Nome | Papel |
|---|---|
| Ana | Frontend |
| Bruno | Backend |
```

Que vira:

| Nome | Papel |
|---|---|
| Ana | Frontend |
| Bruno | Backend |

### Checklists

```markdown
- [ ] Tarefa ainda não feita
- [x] Tarefa concluída
```

No GitHub, isso vira caixinhas clicáveis de verdade — muito usado em Issues e Pull Requests para acompanhar progresso.

## Montando a pasta /docs

Agora que você sabe escrever Markdown, é hora de começar a documentação real do projeto. Dentro do repositório que você criou no módulo anterior, crie estes arquivos dentro da pasta `docs/`:

```
docs/
├── requisitos.md
├── historias-de-usuario.md
├── arquitetura.md
└── design-system.md
```

**Importante:** você não precisa preencher todos esses arquivos agora. Nesta etapa, o objetivo é só criar a estrutura. Cada um desses arquivos será preenchido conforme você avança pelos próximos módulos:

- `requisitos.md` → módulo 04
- `historias-de-usuario.md` → também módulo 04
- `design-system.md` → módulo 07
- `arquitetura.md` → módulo 08 (principalmente veteranos, mas todo mundo pode começar o seu)

## 🌱 Se você está começando

Não existe "Markdown errado" que quebre alguma coisa importante — na pior das hipóteses, a formatação não fica do jeito esperado, e é só ajustar. Sinta-se livre para testar a sintaxe em um arquivo de rascunho antes de usar nos arquivos oficiais do projeto. A maioria dos editores de código (como o VS Code) tem um modo de pré-visualização (`Ctrl+Shift+V` no VS Code) que mostra como o Markdown vai ficar formatado.

## ⚡ Se você já tem experiência

Alguns recursos extras que valem a pena, principalmente para documentação técnica mais robusta:

- **Citações:** `> texto` cria um bloco de citação.
- **Linhas horizontais:** `---` cria uma linha divisória entre seções (como as que separam os módulos deste material).
- **Links internos entre arquivos:** `[veja os requisitos](./requisitos.md)` — essencial para conectar os arquivos dentro da pasta `/docs` entre si, criando uma documentação navegável.
- Considere adicionar um índice no topo de arquivos mais longos, com links para cada seção.

## Pratique você mesmo

1. Dentro do seu repositório, crie a pasta `docs/` (se ainda não existir) com os quatro arquivos vazios listados acima.
2. No `README.md` principal do repositório, escreva uma versão inicial usando pelo menos: um título, uma lista, e um link para a pasta `docs/`.
3. Faça commit e push dessas mudanças.

**Checklist do módulo:**

- [ ] Sei usar títulos, listas, links, código inline e blocos de código
- [ ] Pasta `docs/` criada com os quatro arquivos (mesmo que vazios)
- [ ] README.md do projeto atualizado com formatação básica
- [ ] Commit e push feitos

---

**Próximo módulo:** `04-requisitos.md` — agora vamos definir o que o projeto realmente precisa fazer.
