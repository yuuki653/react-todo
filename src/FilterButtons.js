import React from "react";
import styles from "./style.module.css";

function FilterButtons({ onFilter, onDeleteCompleted, current }) {
  return (
    <>
      <button
        className={`${styles.filterBtn} ${
          current === "all" ? styles.active : ""
        }`}
        onClick={() => onFilter("all")}
      >
        すべて
      </button>
      <button
        className={`${styles.filterBtn} ${
          current === "active" ? styles.active : ""
        }`}
        onClick={() => onFilter("active")}
      >
        未完了
      </button>
      <button
        className={`${styles.filterBtn} ${
          current === "completed" ? styles.active : ""
        }`}
        onClick={() => onFilter("completed")}
      >
        完了
      </button>
      <button
        className={`${styles.filterBtn} ${styles.deleteCompletedBtn}`}
        onClick={onDeleteCompleted}
      >
        完了を一括削除
      </button>
    </>
  );
}

export default FilterButtons;
