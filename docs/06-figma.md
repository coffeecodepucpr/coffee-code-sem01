# 06 — Figma

> Módulo anterior: `05-ux-ui.md` · Próximo módulo: `07-design-system.md`

Este é um guia prático para quem nunca abriu o Figma. O objetivo **não** é criar uma interface perfeita — é produzir um protótipo navegável que represente o fluxo que você já mapeou no módulo anterior.

## O que é

Figma é uma ferramenta de design de interfaces que roda direto no navegador (não precisa instalar nada). Nele, você desenha telas, organiza elementos e pode conectar essas telas para simular a navegação de um app ou site real — sem escrever nenhuma linha de código.

## Por que usamos

Antes de programar uma interface, é muito mais rápido e barato testá-la visualmente. Se algo não faz sentido no fluxo, é muito mais fácil perceber (e corrigir) em um protótipo no Figma do que depois de já ter escrito código para aquela tela.

## Criando sua conta e seu primeiro arquivo

1. Acesse [figma.com](https://figma.com) e crie uma conta gratuita.
2. No painel inicial, clique em **"Design file"** (ou o botão equivalente de criar novo arquivo de design).
3. Você vai cair em uma tela em branco — essa é a sua área de trabalho (chamada de **canvas**).

Renomeie o arquivo (clique no nome no topo) para algo como `Coffee & Code - Protótipo`.

## Conceitos e ferramentas principais

### Frames

Um **frame** é a "moldura" de uma tela — pense nele como o contorno de um celular ou de uma página de site, onde tudo o que você desenhar vai ficar dentro.

**Como criar:** pressione `F` (atalho de Frame) e escolha um tamanho pré-definido, como "iPhone 14" ou "Desktop", no painel à direita. Cada frame que você criar vai representar uma tela do seu protótipo.

### Texto

**Como criar:** pressione `T`, clique no frame e digite. No painel à direita você ajusta fonte, tamanho, cor e alinhamento.

Use texto para títulos, labels de botões, descrições — qualquer conteúdo escrito da tela.

### Formas

**Como criar:** pressione `R` para retângulo, `O` para elipse (círculo/oval). Formas são a base para construir botões, cards, ícones simples, e qualquer bloco visual.

Você pode arredondar os cantos de um retângulo ajustando o "Corner radius" no painel direito — isso é como se cria a aparência de um botão moderno, por exemplo.

### Componentes (introdução)

Um **componente** é um elemento reutilizável — por exemplo, um botão que você vai usar em várias telas. Em vez de redesenhar o botão do zero em cada tela, você cria ele uma vez como componente e reaproveita.

**Como criar:** selecione o elemento (ou grupo de elementos, como um retângulo + texto formando um botão) e clique no ícone de diamante (ou `Ctrl/Cmd + Alt + K`) para transformar em componente. Copiar esse componente cria uma **instância** — se você editar o componente original, todas as instâncias são atualizadas automaticamente.

Isso é extremamente útil para manter consistência visual (lembra do módulo anterior?) sem trabalho repetido.

### Auto layout (introdução)

**Auto layout** faz elementos se organizarem automaticamente — em fila (horizontal) ou coluna (vertical) — com espaçamento consistente entre eles, ajustando-se automaticamente quando o conteúdo muda de tamanho.

**Como usar:** selecione os elementos que você quer organizar e pressione `Shift + A`. Isso é especialmente útil, por exemplo, para uma lista de itens (como a lista de grupos de estudo) onde cada item deve ficar espaçado igualmente dos outros, sem você precisar alinhar manualmente cada um.

🌱 Não se preocupe em dominar Auto Layout nesta semana — só saiba que existe e o que resolve. Vamos voltar a esse assunto com mais profundidade adiante.

### Estilos

Estilos permitem salvar uma cor, fonte ou efeito para reutilizar em todo o arquivo — se você mudar o estilo, tudo que usa ele muda junto. Isso conecta diretamente com o próximo módulo, Design System.

## Como fazer: criando as telas do seu fluxo

Pegue as anotações do módulo anterior (o fluxo com as telas listadas) e siga:

1. **Crie um frame para cada tela** do seu fluxo (`F`, escolha um tamanho, por exemplo "iPhone 14").
2. **Nomeie cada frame** de forma clara (clique duas vezes no nome do frame na lista de camadas à esquerda) — por exemplo: "01 - Busca", "02 - Lista de grupos", "03 - Detalhes do grupo".
3. **Desenhe os elementos principais de cada tela**, sem se preocupar ainda com estilo refinado: título, campos, botões, listas — o essencial para representar o que aquela tela faz.
4. **Use texto real**, baseado nos requisitos e histórias de usuário que você já escreveu — evite "lorem ipsum" ou texto genérico sempre que possível. Isso ajuda a validar se o conteúdo faz sentido, não só o layout.

## Conectando as telas — modo Prototype

Depois que as telas estiverem desenhadas, é hora de torná-las navegáveis:

1. No topo do Figma, mude do modo **Design** para o modo **Prototype**.
2. Selecione um elemento clicável (por exemplo, um botão) na tela de origem.
3. Uma alcinha vai aparecer na borda do elemento — arraste essa alcinha até o frame de destino (a próxima tela do fluxo).
4. Configure a interação: normalmente, "On click" (ao clicar) → "Navigate to" (navegar para) a tela escolhida.

Repita isso para cada conexão do seu fluxo, seguindo exatamente o caminho que você mapeou no módulo de UX/UI.

## Testando o protótipo

Com pelo menos uma conexão feita, clique no botão de **Play** (▶) no canto superior direito. Isso abre uma visualização onde você pode clicar nos elementos conectados e "navegar" entre as telas como se fosse o app de verdade.

## Compartilhando o projeto

Clique em **Share** (canto superior direito). Você pode:

- Copiar o link do arquivo e compartilhar com colegas ou com a administração do Coffee & Code.
- Ajustar a permissão (visualização ou edição) de quem recebe o link.

Guarde esse link — ele faz parte do entregável da semana.

## 🌱 Se você está começando

Não precisa criar ícones do zero ou se preocupar com pixel perfeito. Use retângulos e texto simples para representar os elementos — o objetivo desta semana é a **estrutura e o fluxo**, não o acabamento visual. Refinamento visual vem depois, inclusive no próximo módulo.

## ⚡ Se você já tem experiência

Desafios extras para você:

- Use **componentes** para pelo menos um elemento repetido (por exemplo, um card de grupo que aparece várias vezes na lista).
- Experimente **Auto Layout** em pelo menos uma lista ou grupo de botões.
- Crie ao menos uma variação de estado (por exemplo: como fica a tela de lista quando não há nenhum grupo encontrado?).
- Organize as camadas com nomes claros — evite deixar elementos com nomes genéricos como "Retângulo 34".

## Pratique você mesmo — atividade

1. Crie um arquivo no Figma com um frame para cada tela do seu fluxo (mapeado no módulo 05).
2. Desenhe os elementos principais de cada tela, usando texto real baseado nos seus requisitos.
3. Conecte as telas no modo Prototype, seguindo o fluxo definido.
4. Teste a navegação usando o modo Play.
5. Compartilhe o link do arquivo (ajuste a permissão para "qualquer pessoa com o link pode visualizar").
6. Adicione esse link em algum lugar do seu repositório — sugestão: no `README.md` principal, em uma seção "Protótipo".

**Checklist do módulo:**

- [ ] Conta no Figma criada
- [ ] Um frame criado para cada tela do fluxo principal
- [ ] Elementos principais desenhados em cada tela, com texto real
- [ ] Telas conectadas no modo Prototype
- [ ] Protótipo testado no modo Play
- [ ] Link compartilhável gerado e salvo no repositório
- [ ] ⚡ Veteranos: pelo menos um componente e um uso de Auto Layout

---

**Próximo módulo:** `07-design-system.md` — agora vamos deixar essas telas visualmente consistentes.
