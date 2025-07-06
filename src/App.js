import React from "react";
import { useState } from "react";
import styles from "./style.module.css";
import AddTask from "./AddTask";
import FilterButtons from "./FilterButtons";
import TodoItemList from "./TodoItemList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState("all");

  const handleAdd = () => {
    if (!task.trim()) {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const handleDelete = (deleteId) => {
    const newTodos = todos.filter((todo) => todo.id !== deleteId);
    setTodos(newTodos);
  };

  const handleToggle = (toggleId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === toggleId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterType === "active") {
      return !todo.completed;
    }
    if (filterType === "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <>
      <h1>Todoリスト</h1>
      <AddTask task={task} onChange={setTask} onAdd={handleAdd} />
      <br />
      <br />
      <FilterButtons onFilter={setFilterType} />
      <br />
      <TodoItemList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
