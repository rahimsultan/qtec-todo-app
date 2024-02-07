import useTodoContext from "../utils/useTodo";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import TaskHeader from "./TaskHeader";
import TaskTable from "./TaskTable";

function TaskContainer() {
  const { isAddForm, isEditForm } = useTodoContext();
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <TaskHeader />
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <TaskTable />
              {isAddForm && <AddForm />}
              {isEditForm && <EditForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskContainer;
