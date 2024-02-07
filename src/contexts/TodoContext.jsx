/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { getTodo } from "../assets/data/Todos";

const todo = getTodo();
console.log(todo);

export const Context = createContext();

function TodoContext({ children }) {
  const [todos, setTodos] = useState(todo);
  const [modalOpen, setModalOpen] = useState(false);

  const todoOption = {
    modalOpen,
    setModalOpen,
    todos,
    setTodos,
  };
  return <Context.Provider value={todoOption}>{children}</Context.Provider>;
}

export default TodoContext;

export function useTodoContext() {
  const todo = useContext(Context);
  return todo;
}
