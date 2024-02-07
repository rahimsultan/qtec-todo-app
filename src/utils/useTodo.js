import { useContext } from "react";
import { Context } from "../contexts/TodoContext";

export default function useTodoContext() {
  const todo = useContext(Context);
  return todo;
}
