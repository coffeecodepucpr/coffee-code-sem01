# Histórias de Usuário — Shelf Hub

## 1. Objetivo

Este documento apresenta as histórias de usuário do **Shelf Hub**, descrevendo as principais necessidades do usuário e os critérios de aceitação para as funcionalidades previstas no MVP.

As histórias foram definidas com base no escopo inicial do projeto e representam o comportamento esperado do sistema.

---

# HU01 — Cadastrar uma obra

> **Como usuário, quero cadastrar uma obra para guardar suas informações em um único lugar e conseguir encontrá-las rapidamente.**

### Critérios de aceitação

* **CA01 — Informar dados da obra:** o usuário deve conseguir informar os dados necessários da obra, como nome, tipo, gênero, status e outras informações previstas.
* **CA02 — Cadastrar obra planejada:** o usuário deve conseguir cadastrar uma obra que ainda não consumiu utilizando o status **Planejado**.
* **CA03 — Salvar na biblioteca:** após o cadastro, a obra deve ser adicionada à biblioteca do usuário.
* **CA04 — Encontrar a obra:** após o cadastro, a obra deve poder ser encontrada na biblioteca e por meio da pesquisa.
* **CA05 — Restringir avaliação:** uma obra com status **Planejado** não deve permitir o cadastro de nota ou comentário antes de ser consumida.
* **CA06 — Cadastro concluído:** o sistema deve indicar que o cadastro foi realizado com sucesso.

---

# HU02 — Editar uma obra

> **Como usuário, quero editar uma obra cadastrada para atualizar seu status, sua nota e outras informações conforme minha experiência com ela mudar.**

### Critérios de aceitação

* **CA01 — Acessar edição:** o usuário deve conseguir acessar a opção de edição de uma obra cadastrada.
* **CA02 — Alterar informações:** o usuário deve conseguir alterar as informações permitidas da obra.
* **CA03 — Alterar status:** o usuário deve conseguir alterar o status da obra.
* **CA04 — Adicionar nota após consumo:** quando a obra estiver como **Consumido**, o usuário deve conseguir adicionar uma nota.
* **CA05 — Adicionar comentário após consumo:** quando a obra estiver como **Consumido**, o usuário deve conseguir adicionar um comentário.
* **CA06 — Salvar alterações:** após salvar, as alterações devem ser refletidas na biblioteca e nos detalhes da obra.
* **CA07 — Preservar informações:** informações que não forem alteradas devem permanecer iguais.

---

# HU03 — Excluir uma obra

> **Como usuário, quero excluir uma obra cadastrada para remover registros adicionados por engano ou que não quero mais manter associados ao meu histórico e avaliação.**

### Critérios de aceitação

* **CA01 — Acessar exclusão:** o usuário deve conseguir acessar a opção de excluir uma obra.
* **CA02 — Solicitar confirmação:** antes da exclusão, o sistema deve solicitar confirmação do usuário.
* **CA03 — Cancelar exclusão:** o usuário deve conseguir cancelar a exclusão sem remover a obra.
* **CA04 — Confirmar exclusão:** ao confirmar, a obra deve ser removida da biblioteca.
* **CA05 — Remover dos resultados:** a obra excluída não deve aparecer na biblioteca nem nos resultados de pesquisa.
* **CA06 — Indicar exclusão concluída:** o sistema deve indicar que a exclusão foi realizada com sucesso.

---

# HU04 — Alterar status

> **Como usuário, quero alterar o status de uma obra para acompanhar meu progresso, organizar o que já consumi e identificar o que pretendo consumir em seguida.**

### Critérios de aceitação

* **CA01 — Acessar alteração de status:** o usuário deve conseguir alterar o status de uma obra cadastrada.
* **CA02 — Selecionar status:** o usuário deve poder escolher entre **Planejado, Em andamento, Consumido e Abandonado**.
* **CA03 — Salvar novo status:** o sistema deve salvar o novo status selecionado.
* **CA04 — Atualizar biblioteca e detalhes:** o novo status deve ser refletido na biblioteca e na visualização dos detalhes.
* **CA05 — Permitir avaliação após consumo:** quando a obra estiver como **Consumido**, o usuário deve poder adicionar nota e comentário.
* **CA06 — Restringir avaliação antes do consumo:** enquanto a obra não estiver como **Consumido**, o usuário não deve poder adicionar nota ou comentário de experiência.
* **CA07 — Preservar outras informações:** alterar o status não deve modificar as demais informações cadastradas da obra.

---

# HU05 — Biblioteca

> **Como usuário, quero ter minhas obras reunidas em uma biblioteca para realizar pesquisas futuras e acompanhar meu histórico cultural.**

### Critérios de aceitação

* **CA01 — Acessar biblioteca:** o usuário deve conseguir acessar sua biblioteca.
* **CA02 — Exibir obras cadastradas:** a biblioteca deve apresentar as obras cadastradas pelo usuário.
* **CA03 — Exibir informações principais:** cada obra deve apresentar informações principais, como nome, tipo e status.
* **CA04 — Acessar detalhes:** o usuário deve conseguir acessar os detalhes de uma obra a partir da biblioteca.
* **CA05 — Identificar status:** o status atual de cada obra deve estar visível.
* **CA06 — Utilizar pesquisa, filtros e ordenação:** o usuário deve conseguir utilizar esses recursos para encontrar e organizar suas obras.
* **CA07 — Atualizar biblioteca:** alterações de cadastro, edição ou exclusão devem ser refletidas na biblioteca.

---

# HU06 — Pesquisa

> **Como usuário, quero pesquisar obras cadastradas para encontrá-las rapidamente, mesmo quando possuir muitos conteúdos ou houver obras com nomes semelhantes.**

### Critérios de aceitação

* **CA01 — Acessar pesquisa:** o usuário deve conseguir utilizar o recurso de pesquisa.
* **CA02 — Pesquisar por nome:** o usuário deve conseguir pesquisar pelo nome completo ou por parte do nome da obra.
* **CA03 — Exibir resultados:** o sistema deve apresentar as obras que correspondem à pesquisa.
* **CA04 — Tratar nomes semelhantes:** o sistema deve apresentar os resultados correspondentes mesmo quando houver obras com nomes iguais ou semelhantes.
* **CA05 — Informar ausência de resultados:** quando nenhuma obra corresponder à pesquisa, o sistema deve informar que não foram encontrados resultados.
* **CA06 — Acessar detalhes:** o usuário deve conseguir acessar os detalhes de uma obra a partir dos resultados.
* **CA07 — Considerar a biblioteca do usuário:** a pesquisa deve considerar as obras presentes na biblioteca do usuário.

---

# HU07 — Filtros

> **Como usuário, quero filtrar minhas obras por diferentes características, como gênero, tipo, status, nota e favoritos, para encontrar conteúdos específicos e ter maior controle sobre meu histórico cultural.**

### Critérios de aceitação

* **CA01 — Acessar filtros:** o usuário deve conseguir acessar os filtros da biblioteca.
* **CA02 — Filtrar por tipo:** o usuário deve conseguir filtrar as obras por tipo de conteúdo.
* **CA03 — Filtrar por gênero:** o usuário deve conseguir filtrar as obras por gênero.
* **CA04 — Filtrar por status:** o usuário deve conseguir filtrar as obras por status.
* **CA05 — Filtrar por nota:** o usuário deve conseguir filtrar as obras de acordo com sua nota.
* **CA06 — Filtrar favoritos:** o usuário deve conseguir visualizar somente as obras marcadas como favoritas.
* **CA07 — Combinar filtros:** o usuário deve conseguir utilizar mais de um filtro simultaneamente.
* **CA08 — Atualizar resultados:** a lista deve ser atualizada conforme os filtros selecionados.
* **CA09 — Informar ausência de resultados:** quando nenhum conteúdo corresponder aos filtros, o sistema deve informar que não foram encontrados resultados.

---

# HU08 — Ordenação

> **Como usuário, quero ordenar minhas obras por diferentes critérios, como data, nota e ordem alfabética, para facilitar a navegação pelo meu histórico, encontrar obras que não lembro pelo nome e comparar diferentes períodos das minhas avaliações.**

### Critérios de aceitação

* **CA01 — Acessar ordenação:** o usuário deve conseguir acessar as opções de ordenação da biblioteca.
* **CA02 — Ordenar por data:** o usuário deve conseguir ordenar por data, da mais recente para a mais antiga e da mais antiga para a mais recente.
* **CA03 — Ordenar por nota:** o usuário deve conseguir ordenar da maior para a menor nota e da menor para a maior.
* **CA04 — Ordenar alfabeticamente:** o usuário deve conseguir ordenar de A-Z e de Z-A.
* **CA05 — Atualizar lista:** a biblioteca deve atualizar a ordem das obras conforme o critério selecionado.
* **CA06 — Manter filtros ativos:** quando houver filtros aplicados, a ordenação deve ser realizada somente sobre as obras que atendem aos filtros.
* **CA07 — Alterar ordenação:** o usuário deve conseguir mudar o critério de ordenação sem precisar sair da biblioteca.
* **CA08 — Obras sem nota:** obras sem avaliação devem continuar visíveis quando a ordenação por nota for utilizada, sem receber uma nota automaticamente.

---

# HU09 — Visualizar detalhes da obra

> **Como usuário, quero visualizar os detalhes de uma obra para conhecer melhor o conteúdo antes de consumi-lo e revisar as informações cadastradas quando necessário.**

### Critérios de aceitação

* **CA01 — Acessar detalhes:** o usuário deve conseguir acessar os detalhes de uma obra a partir da biblioteca ou dos resultados da pesquisa.
* **CA02 — Exibir informações cadastradas:** os detalhes devem apresentar as principais informações cadastradas, como nome, tipo, gênero, data, onde foi consumida, status, nota, comentário, links externos e favorito, quando aplicáveis.
* **CA03 — Exibir status:** o status atual da obra deve estar claramente identificado.
* **CA04 — Respeitar informações ainda não disponíveis:** quando uma obra ainda não tiver sido consumida, nota e comentário não devem ser exibidos como se já existissem.
* **CA05 — Acessar edição:** o usuário deve conseguir acessar a opção de editar a obra a partir dos detalhes.
* **CA06 — Acessar links externos:** quando houver links externos cadastrados, o usuário deve conseguir acessá-los a partir dos detalhes.
* **CA07 — Identificar favorito:** a visualização deve indicar se a obra está marcada como favorita.
* **CA08 — Atualizar detalhes:** após uma alteração na obra, os detalhes devem apresentar as informações atualizadas.

---

# HU10 — Favoritar

> **Como usuário, quero favoritar obras para destacar conteúdos importantes para mim, facilitar seu acesso posteriormente e utilizar meu histórico cultural como referência para futuras recomendações.**

### Critérios de aceitação

* **CA01 — Acessar opção de favorito:** o usuário deve conseguir marcar uma obra como favorita a partir da biblioteca ou dos detalhes da obra.
* **CA02 — Adicionar aos favoritos:** ao favoritar uma obra, ela deve ser identificada como favorita.
* **CA03 — Remover dos favoritos:** o usuário deve conseguir remover uma obra da lista de favoritos.
* **CA04 — Limite de favoritos:** o usuário poderá possuir no máximo **20 obras favoritas** simultaneamente.
* **CA05 — Impedir novo favorito no limite:** quando o usuário já possuir 20 obras favoritas, o sistema não deve permitir favoritar uma nova obra até que outra seja removida.
* **CA06 — Identificar obras favoritas:** a biblioteca e os detalhes devem indicar quais obras estão marcadas como favoritas.
* **CA07 — Filtrar favoritos:** o usuário deve conseguir utilizar o filtro de favoritos para visualizar somente as obras marcadas.
* **CA08 — Manter favorito após edição:** a edição de outras informações da obra não deve remover seu estado de favorito.

---

# HU11 — Avaliar uma obra com nota

> **Como usuário, quero atribuir uma nota a uma obra que consumi para registrar minha avaliação e comparar minhas experiências com diferentes conteúdos.**

### Critérios de aceitação

* **CA01 — Acessar opção de avaliação:** o usuário deve conseguir acessar a opção de atribuir uma nota nos detalhes ou na edição da obra.
* **CA02 — Permitir avaliação somente após o consumo:** a nota só poderá ser adicionada quando a obra estiver com status **Consumido**.
* **CA03 — Definir nota:** o usuário deve conseguir selecionar uma nota utilizando o sistema de avaliação **por estrelas** definido para o projeto.
* **CA04 — Salvar nota:** após confirmar a avaliação, a nota deve ser salva junto à obra.
* **CA05 — Exibir nota:** a nota cadastrada deve aparecer nos detalhes da obra e nos locais da biblioteca em que a avaliação for relevante.
* **CA06 — Alterar nota:** o usuário deve conseguir alterar a nota posteriormente.
* **CA07 — Obra sem avaliação:** obras consumidas que ainda não possuem nota devem continuar disponíveis normalmente, sem receber uma nota automaticamente.
* **CA08 — Utilizar nota nos filtros e ordenação:** a nota cadastrada deve poder ser utilizada pelos recursos de filtro e ordenação da biblioteca.

---

# HU12 — Comentar uma obra

> **Como usuário, quero adicionar um comentário a uma obra que consumi para registrar minhas impressões e manter um histórico das minhas experiências com diferentes conteúdos.**

### Critérios de aceitação

* **CA01 — Acessar opção de comentário:** o usuário deve conseguir acessar a opção de adicionar um comentário nos detalhes ou na edição da obra.
* **CA02 — Permitir comentário somente após o consumo:** o comentário só poderá ser adicionado quando a obra estiver com status **Consumido**.
* **CA03 — Adicionar comentário:** o usuário deve conseguir escrever e inserir seu comentário sobre a obra.
* **CA04 — Salvar comentário:** após confirmar, o comentário deve ser salvo junto à obra.
* **CA05 — Exibir comentário:** o comentário cadastrado deve aparecer na visualização dos detalhes da obra.
* **CA06 — Editar comentário:** o usuário deve conseguir alterar seu comentário posteriormente.
* **CA07 — Obra sem comentário:** uma obra consumida que ainda não possui comentário deve continuar disponível normalmente, sem exigir que o usuário escreva um.
* **CA08 — Remover comentário:** o usuário deve conseguir remover um comentário cadastrado sem precisar excluir a obra.

---

# HU13 — Adicionar links externos

> **Como usuário, quero adicionar links externos a uma obra para acessar facilmente outras fontes de informação relacionadas a ela.**

### Critérios de aceitação

* **CA01 — Acessar opção de links:** o usuário deve conseguir adicionar links externos durante o cadastro ou edição da obra.
* **CA02 — Adicionar link:** o usuário deve conseguir informar uma URL relacionada à obra.
* **CA03 — Salvar links:** os links adicionados devem ser armazenados junto às informações da obra.
* **CA04 — Visualizar links:** os links cadastrados devem aparecer nos detalhes da obra.
* **CA05 — Acessar link:** o usuário deve conseguir abrir um link cadastrado para acessar a página externa correspondente.
* **CA06 — Editar links:** o usuário deve conseguir alterar ou substituir links cadastrados.
* **CA07 — Remover links:** o usuário deve conseguir remover um link que não deseja mais manter.
* **CA08 — Links opcionais:** a obra deve poder ser cadastrada sem nenhum link externo.

> **Observação:** no MVP, os links externos serão adicionados manualmente. Integrações automáticas com serviços externos ficam para versões futuras.

---

# HU14 — Visualizar estatísticas

> **Como usuário, quero visualizar estatísticas sobre minhas obras para acompanhar meu histórico de consumo e entender melhor meus hábitos culturais.**

### Critérios de aceitação

* **CA01 — Acessar estatísticas:** o usuário deve conseguir acessar uma área de estatísticas da sua biblioteca.
* **CA02 — Exibir total de obras:** o sistema deve apresentar a quantidade total de obras cadastradas.
* **CA03 — Exibir quantidade por tipo:** o sistema deve apresentar a quantidade de obras cadastradas em cada tipo de conteúdo.
* **CA04 — Exibir quantidade por status:** o sistema deve apresentar a quantidade de obras em cada status: **Planejado, Em andamento, Consumido e Abandonado**.
* **CA05 — Exibir média geral das notas:** o sistema deve apresentar a média das notas atribuídas às obras avaliadas.
* **CA06 — Exibir média por tipo:** o sistema deve apresentar a média das notas separadamente para cada tipo de conteúdo que possuir obras avaliadas.
* **CA07 — Exibir consumo por período:** o sistema deve permitir visualizar a quantidade de obras consumidas em determinado período.
* **CA08 — Considerar apenas dados existentes:** as estatísticas devem ser calculadas com base nas obras cadastradas pelo usuário e não devem atribuir valores automaticamente a informações que não foram registradas.
* **CA09 — Atualizar estatísticas:** as estatísticas devem ser atualizadas quando o usuário cadastrar, editar, excluir ou alterar o status de uma obra.

> **Observação:** gráficos avançados e estatísticas adicionais ficam fora do MVP e poderão ser desenvolvidos futuramente.

---

# HU15 — Gerenciar a biblioteca pessoal

> **Como usuário, quero ter uma biblioteca própria para reunir e acompanhar todas as obras que cadastrei, mantendo meu histórico organizado em um único lugar.**

### Critérios de aceitação

* **CA01 — Biblioteca individual:** cada usuário deve possuir sua própria biblioteca de obras cadastradas.
* **CA02 — Visualizar obras cadastradas:** o usuário deve conseguir visualizar as obras que fazem parte da sua biblioteca.
* **CA03 — Adicionar obras à biblioteca:** ao cadastrar uma obra, ela deve ser adicionada à biblioteca do usuário.
* **CA04 — Atualizar biblioteca:** alterações realizadas em uma obra devem ser refletidas na biblioteca.
* **CA05 — Remover obras:** ao excluir uma obra, ela deve deixar de fazer parte da biblioteca do usuário.
* **CA06 — Acessar informações da obra:** o usuário deve conseguir acessar os detalhes de qualquer obra presente em sua biblioteca.
* **CA07 — Organização da biblioteca:** o usuário deve conseguir utilizar pesquisa, filtros e ordenação para organizar e encontrar suas obras.
* **CA08 — Manter histórico:** a biblioteca deve permitir acompanhar as obras planejadas, em andamento, consumidas e abandonadas.

> **Observação:** o projeto será estruturado considerando bibliotecas individuais para cada usuário. Entretanto, cadastro de contas, login, autenticação e recuperação de acesso ficam fora do MVP e serão implementados em versões futuras.

---

# Funcionalidades futuras relacionadas às histórias

As seguintes funcionalidades não fazem parte do MVP atual e poderão ser incorporadas posteriormente:

* Autenticação e gerenciamento de contas;
* Recuperação de acesso;
* Integrações automáticas com serviços externos;
* Informações específicas para cada tipo de conteúdo;
* Recurso **Me Surpreenda**;
* Recursos sociais e visualização de avaliações de outros usuários;
* Estatísticas avançadas e gráficos;
* Exportação da biblioteca em CSV ou JSON;
* Compartilhamento de listas;
* Outras integrações e recursos de personalização.

---

# Resumo

O MVP do **Shelf Hub** contempla o cadastro e gerenciamento de obras, controle de status, biblioteca pessoal, pesquisa, filtros, ordenação, visualização de detalhes, favoritos, avaliações por estrelas, comentários, links externos e estatísticas básicas.

As histórias de usuário foram organizadas para representar as principais interações esperadas entre o usuário e o sistema, mantendo separadas as funcionalidades previstas para o MVP e aquelas planejadas para versões futuras.
