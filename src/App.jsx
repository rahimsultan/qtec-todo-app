import TaskContainer from "./components/TaskContainer";
import TodoContext from "./contexts/TodoContext";

function App() {
  return (
    <TodoContext>
      <TaskContainer />
    </TodoContext>
  );
}

export default App;
