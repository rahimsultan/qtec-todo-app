import { useState } from "react";

import { nextId } from "../utils/nextId";
import useTodoContext from "../utils/useTodo";

function AddForm() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const { setIsAddForm, setTodos, todos } = useTodoContext();

  const handleTaskAdd = (event) => {
    event.preventDefault();

    // new todo object
    const newTodo = {
      id: nextId(todos),
      title,
      status,
      priority,
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
    setIsAddForm((prev) => !prev);
  };

  return (
    <div className="relative flex justify-center">
      <div className="fixed inset-0 z-10 overflow-y-auto" role="dialog">
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
            <h3
              className="text-lg font-medium leading-6 text-gray-800 capitalize "
              id="modal-title"
            >
              Add Task
            </h3>

            <form className="mt-4" onSubmit={handleTaskAdd}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="title"
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              />
              <select
                name="status"
                required
                className="block w-full mt-3 px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">select status</option>
                <option value="incomplete">incomplete</option>
                <option value="complete">complete</option>
              </select>
              <select
                name="priority"
                required
                className="block w-full mt-3 px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">select priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
              </select>

              <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2  hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  onClick={() => setIsAddForm((prev) => !prev)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
