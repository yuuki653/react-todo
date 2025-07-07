import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={styles.listItem}>
      <span className={todo.completed ? styles.completed : ""}>
        {todo.text}
      </span>
      <div className={styles.checks}>
        <input
          className={styles.checkBox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>
          削除
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
