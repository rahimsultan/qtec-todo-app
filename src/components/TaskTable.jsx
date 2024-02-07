import useTodoContext from "../hooks/useTodo";
import Task from "./Task";

function TaskTable() {
  const { todos, priority } = useTodoContext();

  const filtered =
    priority === "all"
      ? todos
      : todos.filter((todo) => todo.priority === priority);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
          >
            <span>Title</span>
          </th>
          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
          >
            Status
          </th>

          <th
            scope="col"
            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
          >
            Priority
          </th>

          <th scope="col" className="relative px-4 py-3.5">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {filtered.length > 0 ? (
          filtered.map((todo) => <Task key={todo.id} todo={todo} />)
        ) : (
          <tr>
            <td colSpan={6} className="text-center py-3">
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TaskTable;
