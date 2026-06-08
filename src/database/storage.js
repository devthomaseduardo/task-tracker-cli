import fs from "node:fs";
import path from "node:path";

const caminhoArquivo = path.resolve("tasks.json");

export function garantirArquivoExiste() {
  if (!fs.existsSync(caminhoArquivo)) {
    fs.writeFileSync(
      caminhoArquivo,
      JSON.stringify([], null, 2)
    );
  }
}

export function lerTarefas() {
  garantirArquivoExiste();

  const conteudo = fs.readFileSync(
    caminhoArquivo,
    "utf-8"
  );

  if (!conteudo) {
    return [];
  }

  return JSON.parse(conteudo);
}

export function salvarTarefas(tarefas) {
  fs.writeFileSync(
    caminhoArquivo,
    JSON.stringify(tarefas, null, 2)
  );
}