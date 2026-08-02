# Task Tracker CLI

CLI de tarefas em **Node.js** (ES Modules), persistência em JSON local, sem dependências externas. Solução do desafio [roadmap.sh/task-tracker](https://roadmap.sh/projects/task-tracker).

Autor: [Thomas Eduardo](https://thomaseduardo.com.br) · [GitHub](https://github.com/devthomaseduardo/task-tracker-cli)

## Propósito

- Praticar CLI, filesystem e separação de responsabilidades em Node.
- CRUD de tarefas com status (`todo`, `in-progress`, `done`).

## Funcionalidades

| Comando | Efeito |
|---------|--------|
| `task-cli add "…"` | Adiciona |
| `task-cli update <id> "…"` | Atualiza |
| `task-cli delete <id>` | Remove |
| `task-cli mark-in-progress <id>` | Em andamento |
| `task-cli mark-done <id>` | Concluída |
| `task-cli list` | Lista todas |
| `task-cli list done\|todo\|in-progress` | Filtra por status |

## Stack

| Camada | Tecnologia |
|--------|------------|
| Runtime | **Node.js** |
| Linguagem | **JavaScript** (ESM) |
| Persistência | **fs** + JSON |

## Instalação

```bash
git clone https://github.com/devthomaseduardo/task-tracker-cli.git
cd task-tracker-cli
npm link
```

## Licença

MIT © Thomas Eduardo
