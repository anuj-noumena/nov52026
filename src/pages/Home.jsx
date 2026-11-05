import { useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import AddTaskForm from "../components/AddTaskForm/AddTaskForm";
import TaskFilter from "../components/TaskFilter/TaskFilter";
import "./Home.css";

// Seed data so the UI isn't empty at first
const initialTasks = [
  {
    id: 1,
    title: "Set up the React project",
    priority: "high",
    status: "done",
  },
  {
    id: 2,
    title: "Build the TaskCard component",
    priority: "medium",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Write API documentation",
    priority: "low",
    status: "pending",
  },
];

function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all"); // 'all' | 'pending' | 'in-progress' | 'done'

  // ADD a task — receives data from AddTaskForm
  const handleAddTask = (newTaskData) => {
    const newTask = {
      id: Date.now(), // Simple unique ID for now (Session 4 uses MongoDB _id)
      ...newTaskData,
    };
    setTasks([...tasks, newTask]);
  };

  // DELETE a task by ID
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // UPDATE a task's status
  const handleStatusChange = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  // FILTER tasks for display — original 'tasks' array is untouched
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <main className="home-page">
      <div className="page-header">
        <h1>My Tasks</h1>
        <p>{tasks.length} total tasks</p>
      </div>

      <AddTaskForm onAddTask={handleAddTask} />

      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p className="empty-state">No tasks here. Add one above! 🎯</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onStatusChange={handleStatusChange}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Home;
