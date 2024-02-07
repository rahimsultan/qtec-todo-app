import useTodoContext from "../utils/useTodo";
import Filter from "./Filter";

function TaskHeader() {
  const { setIsAddForm, todos } = useTodoContext();
  const complete = todos?.filter((todo) => todo.status === "complete").length;

  return (
    <div className="mt-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Daily Task Lists</h2>
      <div className="flex items-center gap-3 flex-wrap">
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => setIsAddForm((prev) => !prev)}
        >
          Add Task
        </button>
        <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
          Total Task: {todos?.length}
        </button>
        <button className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold">
          Completed Task: {complete}
        </button>
        <Filter />
      </div>
    </div>
  );
}

export default TaskHeader;
