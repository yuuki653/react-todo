import React from "react";
import styles from "./style.module.css";
import TodoItem from "./TodoItem";

function TodoItemList({
  todos,
  editingId,
  editText,
  setEditText,
  onToggle,
  onDelete,
  onEditStart,
  onEditSave,
}) {
  return (
    <ul className={styles.items}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          onToggle={onToggle}
          onEditStart={onEditStart}
          onEditSave={onEditSave}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoItemList;
