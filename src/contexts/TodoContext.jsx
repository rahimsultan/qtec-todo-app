/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getTodo } from "../assets/data/Todos";

const todo = getTodo();

export const Context = createContext();

function TodoContext({ children }) {
  const [todos, setTodos] = useState(todo);
  const [isAddForm, setIsAddForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [item, setItem] = useState(null);

  const todoOption = {
    isAddForm,
    setIsAddForm,
    todos,
    setTodos,
    isEditForm,
    setIsEditForm,
    item,
    setItem,
  };
  return <Context.Provider value={todoOption}>{children}</Context.Provider>;
}

export default TodoContext;
