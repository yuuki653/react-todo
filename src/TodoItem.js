import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={styles.listItem}>
      <span className={todo.completed ? styles.completed : ""}>
        {todo.text}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}

export default TodoItem;
