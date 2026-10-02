# Desafios — Semana 01

Estes desafios são opcionais. Eles existem para quem terminou os módulos principais e quer se aprofundar mais, ou para quem quer deixar o entregável da semana mais robusto. Nenhum deles é obrigatório para a entrega básica (veja `entregavel.md` para o que é obrigatório).

Os desafios estão organizados pelos mesmos módulos da semana, e marcados por trilha.

---

## Git & GitHub

🌱
- Reverta uma mudança usando `git log` para encontrar o commit e `git checkout <hash> -- arquivo` para recuperar uma versão anterior de um arquivo específico.
- Escreva, para cada commit que você já fez, uma mensagem melhor do que a original (sem precisar de fato reescrever o histórico) — só como exercício de avaliar boas mensagens de commit.

⚡
- Crie uma branch, faça uma mudança nela, e pratique um `merge` de volta para a `main` — incluindo resolver um conflito de merge proposital (edite a mesma linha de um arquivo em duas branches diferentes e tente juntar as duas).
- Configure um template de Issue no repositório (`.github/ISSUE_TEMPLATE`) para padronizar como bugs e funcionalidades são reportados.
- Pesquise e escreva, no seu `README.md`, uma seção "Como contribuir" explicando o fluxo esperado de branch → commit → Pull Request para quem quiser colaborar com o projeto.

---

## Markdown

🌱
- Adicione um índice no topo do seu `README.md`, com links internos para cada seção do documento.
- Inclua uma imagem (pode ser um print do seu protótipo do Figma) em algum lugar da documentação, usando a sintaxe de imagem.

⚡
- Crie um arquivo `docs/decisoes.md` (um "log de decisões técnicas") documentando pelo menos uma decisão que você tomou nesta semana e por quê — isso é uma prática comum em projetos reais, geralmente chamada de ADR (Architecture Decision Record).

---

## Requisitos

🌱
- Escreva mais 2 histórias de usuário além das que você já tem, cobrindo um caso de uso secundário do projeto (não o principal).

⚡
- Priorize todos os seus requisitos funcionais usando o método MoSCoW (Must / Should / Could / Won't have por enquanto) e documente essa priorização em `docs/requisitos.md`.
- Para cada requisito funcional, adicione um critério de aceite claro (uma frase que descreve exatamente quando aquele requisito pode ser considerado "cumprido").

---

## UX/UI & Figma

🌱
- Desenhe um estado de "carregando" (loading) para pelo menos uma tela do seu protótipo.
- Desenhe um estado de "vazio" — por exemplo, como fica a tela de lista de grupos se a busca não encontrar nada.

⚡
- Transforme pelo menos dois elementos repetidos do seu protótipo em componentes reais do Figma (não apenas cópias).
- Use Auto Layout em pelo menos uma lista, garantindo que ela se ajuste automaticamente se um item for adicionado ou removido.
- Crie uma variante de componente (por exemplo, um botão com estado "normal" e estado "desabilitado") usando o recurso de Variants do Figma.

---

## Design System

🌱
- Verifique manualmente o contraste entre o texto e o fundo das suas telas principais — ele parece legível mesmo em uma tela pequena ou com pouca luz?

⚡
- Pesquise sobre "design tokens" e reescreva seu `docs/design-system.md` nomeando cada valor como uma variável (`color-primary`, `spacing-sm`, etc.) em vez de valores soltos.
- Use uma ferramenta gratuita de checagem de contraste (pesquise "WCAG contrast checker") e confirme que sua paleta principal atende ao nível AA de acessibilidade.

---

## Arquitetura

⚡ (principalmente)
- Pesquise brevemente a diferença entre um banco de dados relacional e um não-relacional, e escreva em `docs/arquitetura.md` qual faria mais sentido para o seu projeto e por quê.
- Esboce, em alto nível (sem código ainda), como seria uma comunicação entre frontend e backend para o seu caso de uso principal — por exemplo, que informação seria enviada e que informação seria recebida de volta.

---

## Desafio geral (todos)

Apresente o seu projeto para outra pessoa do Coffee & Code usando **apenas** a sua pasta `/docs` e o link do Figma — sem explicação verbal complementar. Se a pessoa conseguir entender o problema, os requisitos e navegar pelo protótipo sozinha, sua documentação está cumprindo o papel dela. Se não conseguir, veja o que faltou e ajuste.

Esse é, na prática, o teste real de "documentação autossuficiente" — o mesmo princípio por trás de como o Coffee & Code funciona.
