import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

function AddTask({ task, onChange, onAdd }) {
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="やることを入力"
      />
      <button className={styles.addBtn} onClick={onAdd}>
        追加
      </button>
    </>
  );
}

export default AddTask;
