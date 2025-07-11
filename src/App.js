import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import AddTask from "./AddTask";
import FilterButtons from "./FilterButtons";
import TodoItemList from "./TodoItemList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const handleDeleteCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleEditStart = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <>
      <h1>Todoリスト</h1>
      <AddTask task={task} onChange={setTask} onAdd={handleAdd} />
      <br />
      <br />
      <FilterButtons
        onFilter={setFilterType}
        onDeleteCompleted={handleDeleteCompleted}
        onDeleteAll={handleDeleteAll}
        onDelete={handleDeleteCompleted}
        current={filterType}
      />
      <br />
      <TodoItemList
        todos={filteredTodos}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEditStart={handleEditStart}
        onEditSave={handleEditSave}
      />
    </>
  );
}

export default App;
