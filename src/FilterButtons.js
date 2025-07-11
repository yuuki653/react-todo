import React from "react";
import styles from "./style.module.css";

function FilterButtons({ onFilter, onDeleteCompleted, onDeleteAll, current }) {
  return (
    <>
      <button
        className={` ${styles.btns} ${current === "all" ? styles.active : ""}`}
        onClick={() => onFilter("all")}
      >
        すべて
      </button>
      <button
        className={`${styles.btns} ${
          current === "active" ? styles.active : ""
        }`}
        onClick={() => onFilter("active")}
      >
        未完了
      </button>
      <button
        className={`${styles.btns} ${
          current === "completed" ? styles.active : ""
        }`}
        onClick={() => onFilter("completed")}
      >
        完了
      </button>
      <button
        className={`${styles.btns} ${styles.deleteBtn}`}
        onClick={onDeleteCompleted}
      >
        完了したタスクを削除
      </button>
      <button
        className={`${styles.btns} ${styles.deleteBtn}`}
        onClick={onDeleteAll}
      >
        一括削除
      </button>
    </>
  );
}

export default FilterButtons;
