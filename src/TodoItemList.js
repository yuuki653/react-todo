import React from "react";
import styles from "./style.module.css";
import TodoItem from "./TodoItem";

function TodoItemList({ todos, onToggle, onDelete }) {
  return (
    <ul className={styles.items}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoItemList;
