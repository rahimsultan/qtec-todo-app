function Task() {
  return (
    <tr key={"person.name"}>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="text-sm text-gray-900 ">
          API Data Synchronization with Python
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          Complete
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
        Medium
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium w-[300px]">
        <div className="flex items-center gap-3 ">
          <button className="text-green-500">Mark as Complete</button>
          <button className="text-blue-500">Edit</button>
          <button className="text-red-500">Delete</button>
        </div>
      </td>
    </tr>
  );
}

export default Task;
