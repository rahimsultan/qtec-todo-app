/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getTodo } from "../assets/data/Todos";

const todo = getTodo();

export const Context = createContext();

function TodoContext({ children }) {
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : todo;
  });
  const [isAddForm, setIsAddForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [item, setItem] = useState(null);
  const [priority, setPriority] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log("todos context", todos);
  }, [todos]); // Run whenever todos change

  const todoOption = {
    isAddForm,
    setIsAddForm,
    todos,
    setTodos,
    isEditForm,
    setIsEditForm,
    item,
    setItem,
    priority,
    setPriority,
  };

  return <Context.Provider value={todoOption}>{children}</Context.Provider>;
}

export default TodoContext;
