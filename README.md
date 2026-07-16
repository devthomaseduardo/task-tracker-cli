# Task Tracker CLI

Projeto desenvolvido como solução para o desafio **Task Tracker CLI** do roadmap.sh.

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=devthomaseduardo&repo=task-tracker-cli&color=orange" alt="Repository Views" />
</p>

## Sobre

Task Tracker CLI é uma aplicação de linha de comando (CLI) para gerenciamento de tarefas. As tarefas são armazenadas em um arquivo JSON local, sem utilização de bibliotecas externas.

## Funcionalidades

* Adicionar tarefas
* Atualizar tarefas
* Remover tarefas
* Marcar tarefas como concluídas
* Marcar tarefas como em andamento
* Listar todas as tarefas
* Filtrar tarefas por status

## Tecnologias

* Node.js
* JavaScript (ES Modules)
* File System (fs)

## Estrutura do Projeto

```txt
src/
├── commands/
├── constants/
├── database/
├── services/
├── utils/
└── index.js
```

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta:

```bash
cd task-tracker-cli
```

Instale o comando localmente:

```bash
npm link
```

## Uso

### Adicionar uma tarefa

```bash
task-cli add "Comprar leite"
```

### Atualizar uma tarefa

```bash
task-cli update 1 "Comprar leite e pão"
```

### Remover uma tarefa

```bash
task-cli delete 1
```

### Marcar como em andamento

```bash
task-cli mark-in-progress 1
```

### Marcar como concluída

```bash
task-cli mark-done 1
```

### Listar todas as tarefas

```bash
task-cli list
```

### Listar tarefas concluídas

```bash
task-cli list done
```

### Listar tarefas pendentes

```bash
task-cli list todo
```

### Listar tarefas em andamento

```bash
task-cli list in-progress
```

## Estrutura da Tarefa

```json
{
  "id": 1,
  "descricao": "Comprar leite",
  "status": "todo",
  "criadaEm": "2026-06-08T20:00:00.000Z",
  "atualizadaEm": "2026-06-08T20:00:00.000Z"
}
```

## Objetivo

Praticar conceitos fundamentais de desenvolvimento backend com Node.js:

* Manipulação de arquivos
* Estruturação de projetos
* Desenvolvimento de aplicações CLI
* Persistência de dados em JSON
* Separação de responsabilidades

## Desafio Original

https://roadmap.sh/projects/task-tracker

---

> **📊 Visualizações deste repositório**  
> O badge acima mostra o número de visualizações únicas deste README (atualizado automaticamente via [komarev.com](https://komarev.com/ghpvc)).  
> Obrigado pela visita! Se o projeto te inspirou, considere deixar uma estrela ⭐️.

**Padrão aplicado em todos os repositórios de Thomas Eduardo.**