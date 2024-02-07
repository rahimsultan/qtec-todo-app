/* eslint-disable react/prop-types */
import {
  MdOutlineDeleteSweep,
  MdOutlineFileDownloadDone,
} from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import useTodoContext from "../utils/useTodo";

function Task({ todo }) {
  const { title, status, priority } = todo;
  const { setIsEditForm, todos, setTodos, setItem } = useTodoContext();

  const handleEdit = (editItem) => {
    console.log("edit btn clicked", editItem);
    setItem(editItem);
    setIsEditForm((prev) => !prev);
  };

  const handleDelete = (deleteItem) => {
    const updated = todos.filter((t) => t.id !== deleteItem.id);
    setTodos(updated);
  };
  // console.log(todos);

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="text-sm text-gray-900 ">{title}</div>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          {status}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
        {priority}
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium w-[300px]">
        <div className="flex items-center gap-3 ">
          <button className="text-green-500" title="mark as done">
            <MdOutlineFileDownloadDone size={20} />
          </button>
          <button className="text-blue-500" onClick={() => handleEdit(todo)}>
            <TbEdit size={20} />
          </button>
          <button className="text-red-500" onClick={() => handleDelete(todo)}>
            <MdOutlineDeleteSweep size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Task;
