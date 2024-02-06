import Task from "./Task";

function TaskTable() {
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
        <Task />
        <Task />
      </tbody>
    </table>
  );
}

export default TaskTable;
