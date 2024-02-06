const todos = [
  {
    id: 1,
    title: "Integration API",
    status: "incomplete",
    priority: "high",
  },
  {
    id: 2,
    title: "API Data Synchronization with Python",
    status: "complete",
    priority: "high",
  },
  {
    id: 3,
    title: "Efficient Web API Connectivity in Python",
    status: "complete",
    priority: "medium",
  },
];

function getData() {
  return todos;
}

export { getData };
