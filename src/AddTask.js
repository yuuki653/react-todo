import React from "react";
import styles from "./style.module.css";

function AddTask({ task, onChange, onAdd }) {
  return (
    <>
      <input
        type="text"
        className={styles.textAreas}
        value={task}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") onAdd();
        }}
        placeholder="やることを入力"
      />
      <button className={`${styles.addBtn} ${styles.btns}`} onClick={onAdd}>
        追加
      </button>
    </>
  );
}

export default AddTask;
