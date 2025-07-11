import React from "react";
import styles from "./style.module.css";

function TodoItem({
  todo,
  editingId,
  editText,
  setEditText,
  onToggle,
  onDelete,
  onEditStart,
  onEditSave,
}) {
  return (
    <li className={styles.listItem}>
      {editingId === todo.id ? (
        <input
          type="text"
          className={styles.textAreas}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onEditSave(todo.id);
          }}
        />
      ) : (
        <span className={todo.completed ? styles.completed : ""}>
          {todo.text}
        </span>
      )}
      <div className={styles.checks}>
        <input
          className={styles.checkBox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        {editingId === todo.id ? (
          <button
            className={`${styles.editBtn} ${styles.btns}`}
            onClick={() => onEditSave(todo.id)}
          >
            保存
          </button>
        ) : (
          <button
            className={`${styles.editBtn} ${styles.btns}`}
            onClick={() => onEditStart(todo)}
          >
            編集
          </button>
        )}
        <button
          className={`${styles.deleteBtn} ${styles.btns}`}
          onClick={() => onDelete(todo.id)}
        >
          削除
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
