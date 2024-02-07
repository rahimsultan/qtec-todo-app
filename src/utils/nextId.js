export function nextId(todos) {
  const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
  return maxId + 1;
}
