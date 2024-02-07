import useTodoContext from "../hooks/useTodo";

function Filter() {
  const { priority, setPriority } = useTodoContext();
  return (
    <select
      name="priority"
      required
      className="block  px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
      defaultValue={priority}
      onChange={(e) => {
        setPriority(e.target.value);
      }}
    >
      <option value="all">all</option>
      <option value="high">high</option>
      <option value="medium">medium</option>
      <option value="low">low</option>
    </select>
  );
}

export default Filter;
