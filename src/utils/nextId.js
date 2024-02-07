import { getTodo } from "../assets/data/Todos";

const todos = getTodo();

export function nextId() {
  const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
  return maxId + 1;
}
