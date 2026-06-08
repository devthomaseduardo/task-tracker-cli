#!/usr/bin/env node

import {
  criarTarefa,
  listarTarefas,
  atualizarTarefa,
  deletarTarefa,
  alterarStatusTarefa,
} from "./services/tarefa-service.js";

import { STATUS_TAREFA } from "./constants/status-tarefa.js";

const argumentos = process.argv.slice(2);
const comando = argumentos[0];

function mostrarAjuda() {
  console.log(`
Task Tracker CLI

Uso:
  task-cli add "Descrição da tarefa"
  task-cli update 1 "Nova descrição"
  task-cli delete 1
  task-cli mark-in-progress 1
  task-cli mark-done 1
  task-cli list
  task-cli list done
  task-cli list todo
  task-cli list in-progress
`);
}

try {
  if (!comando) {
    mostrarAjuda();
    process.exit(0);
  }

  if (comando === "add") {
    const descricao = argumentos[1];

    if (!descricao) {
      throw new Error("Informe a descrição da tarefa.");
    }

    const tarefa = criarTarefa(descricao);

    console.log(`Tarefa adicionada com sucesso (ID: ${tarefa.id})`);
    process.exit(0);
  }

  if (comando === "list") {
    const status = argumentos[1];
    const tarefas = listarTarefas(status);

    if (tarefas.length === 0) {
      console.log("Nenhuma tarefa encontrada.");
      process.exit(0);
    }

    console.table(tarefas);
    process.exit(0);
  }

  if (comando === "update") {
    const id = argumentos[1];
    const novaDescricao = argumentos[2];

    if (!id || !novaDescricao) {
      throw new Error('Use: task-cli update 1 "Nova descrição"');
    }

    atualizarTarefa(id, novaDescricao);

    console.log("Tarefa atualizada com sucesso.");
    process.exit(0);
  }

  if (comando === "delete") {
    const id = argumentos[1];

    if (!id) {
      throw new Error("Use: task-cli delete 1");
    }

    deletarTarefa(id);

    console.log("Tarefa removida com sucesso.");
    process.exit(0);
  }

  if (comando === "mark-in-progress") {
    const id = argumentos[1];

    if (!id) {
      throw new Error("Use: task-cli mark-in-progress 1");
    }

    alterarStatusTarefa(id, STATUS_TAREFA.EM_ANDAMENTO);

    console.log("Tarefa marcada como em andamento.");
    process.exit(0);
  }

  if (comando === "mark-done") {
    const id = argumentos[1];

    if (!id) {
      throw new Error("Use: task-cli mark-done 1");
    }

    alterarStatusTarefa(id, STATUS_TAREFA.CONCLUIDA);

    console.log("Tarefa marcada como concluída.");
    process.exit(0);
  }

  console.log(`Erro: comando "${comando}" não reconhecido.`);
  mostrarAjuda();
  process.exit(1);
} catch (erro) {
  console.log(`Erro: ${erro.message}`);
  process.exit(1);
}