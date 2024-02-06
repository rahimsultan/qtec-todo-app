function TaskHeader() {
  return (
    <div className="mt-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Daily Task Lists</h2>
      <div className="flex items-center space-x-5">
        <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">
          Add Task
        </button>
        <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
          Total Task: 10
        </button>
        <button className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold">
          Completed Task: 5
        </button>
      </div>
    </div>
  );
}

export default TaskHeader;
