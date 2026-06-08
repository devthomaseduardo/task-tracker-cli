export function gerarId(tarefas) {
  if (tarefas.length === 0) {
    return 1;
  }

  const maiorId = Math.max(
    ...tarefas.map((tarefa) => tarefa.id)
  );

  return maiorId + 1;
}