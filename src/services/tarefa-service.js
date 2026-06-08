import { lerTarefas, salvarTarefas } from "../database/storage.js";
import { gerarId } from "../utils/gerar-id.js";
import { STATUS_TAREFA } from "../constants/status-tarefa.js";

export function criarTarefa(descricao) {
  const tarefas = lerTarefas();

  const agora = new Date().toISOString();

  const novaTarefa = {
    id: gerarId(tarefas),
    description: descricao,
    status: STATUS_TAREFA.PENDENTE,
    createdAt: agora,
    updatedAt: agora,
  };

  tarefas.push(novaTarefa);
  salvarTarefas(tarefas);

  return novaTarefa;
}

export function listarTarefas(status) {
  const tarefas = lerTarefas();

  if (!status) {
    return tarefas;
  }

  return tarefas.filter((tarefa) => tarefa.status === status);
}

export function atualizarTarefa(id, novaDescricao) {
  const tarefas = lerTarefas();

  const tarefaExiste = tarefas.find(
    (tarefa) => tarefa.id === Number(id)
  );

  if (!tarefaExiste) {
    throw new Error("Tarefa não encontrada.");
  }

  const tarefasAtualizadas = tarefas.map((tarefa) => {
    if (tarefa.id === Number(id)) {
      return {
        ...tarefa,
        description: novaDescricao,
        updatedAt: new Date().toISOString(),
      };
    }

    return tarefa;
  });

  salvarTarefas(tarefasAtualizadas);

  return tarefaExiste;
}

export function deletarTarefa(id) {
  const tarefas = lerTarefas();

  const tarefaExiste = tarefas.find(
    (tarefa) => tarefa.id === Number(id)
  );

  if (!tarefaExiste) {
    throw new Error("Tarefa não encontrada.");
  }

  const tarefasFiltradas = tarefas.filter(
    (tarefa) => tarefa.id !== Number(id)
  );

  salvarTarefas(tarefasFiltradas);

  return tarefaExiste;
}

export function alterarStatusTarefa(id, novoStatus) {
  const tarefas = lerTarefas();

  const tarefaExiste = tarefas.find(
    (tarefa) => tarefa.id === Number(id)
  );

  if (!tarefaExiste) {
    throw new Error("Tarefa não encontrada.");
  }

  const tarefasAtualizadas = tarefas.map((tarefa) => {
    if (tarefa.id === Number(id)) {
      return {
        ...tarefa,
        status: novoStatus,
        updatedAt: new Date().toISOString(),
      };
    }

    return tarefa;
  });

  salvarTarefas(tarefasAtualizadas);

  return tarefaExiste;
}