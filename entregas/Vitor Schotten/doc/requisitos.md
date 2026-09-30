# Requisitos 
## 1. Descrição do problema

Estudantes precisam organizar matérias, tarefas e prazos de diferentes disciplinas. Quando essas informações ficam espalhadas em cadernos, mensagens e diferentes aplicativos, pode ser difícil saber o que precisa ser feito e acompanhar o próprio progresso.

O projeto propõe um sistema simples de organização de estudos que permite ao estudante cadastrar suas tarefas, associá-las a matérias, definir prazos e acompanhar tarefas pendentes, concluídas e seu progresso.

## 2. Público-alvo

O sistema será utilizado principalmente por estudantes que precisam organizar suas atividades acadêmicas e acompanhar seus prazos.

### Usuário principal
- Estudante.

## 3. Requisitos funcionais

| ID | Requisito |
|---|---|
| RF01 | O sistema deve permitir que o estudante faça login. |
| RF02 | O sistema deve exibir um dashboard após o login. |
| RF03 | O sistema deve permitir visualizar as matérias cadastradas. |
| RF04 | O sistema deve permitir visualizar as tarefas pendentes. |
| RF05 | O sistema deve permitir visualizar as tarefas concluídas. |
| RF06 | O sistema deve permitir cadastrar uma nova tarefa. |
| RF07 | O sistema deve solicitar nome, matéria e prazo ao cadastrar uma tarefa. |
| RF08 | O sistema deve salvar a tarefa cadastrada. |
| RF09 | O sistema deve permitir marcar uma tarefa como concluída. |
| RF10 | O sistema deve apresentar informações de progresso do estudante. |

## 4. Requisitos não funcionais

| ID | Requisito |
|---|---|
| RNF01 | O sistema deve possuir uma interface simples e fácil de entender. |
| RNF02 | O sistema deve apresentar as informações de forma organizada. |
| RNF03 | O sistema deve possuir navegação consistente entre as telas. |
| RNF04 | O sistema deve validar os campos obrigatórios antes de salvar uma tarefa. |
| RNF05 | O sistema deve apresentar mensagens claras quando uma operação for realizada ou quando houver erro. |
| RNF06 | O sistema deve ser responsivo para diferentes tamanhos de tela. |

## 5. Fluxo principal

1. O estudante acessa o sistema.
2. O estudante informa seus dados de login.
3. O sistema valida o acesso.
4. O sistema apresenta o Dashboard.
5. O estudante visualiza matérias, tarefas pendentes, tarefas concluídas e progresso.
6. O estudante seleciona a opção de adicionar tarefa.
7. O sistema apresenta o formulário de cadastro.
8. O estudante informa nome da tarefa, matéria e prazo.
9. O sistema valida os dados.
10. O sistema salva a tarefa.
11. A tarefa passa a aparecer na lista de tarefas pendentes.
