import React from "react";
import styles from "./style.module.css";

function FilterButtons({ onFilter }) {
  return (
    <>
      <button className={styles.filterBtn} onClick={() => onFilter("all")}>
        すべて
      </button>
      <button className={styles.filterBtn} onClick={() => onFilter("active")}>
        未完了
      </button>
      <button
        className={styles.filterBtn}
        onClick={() => onFilter("completed")}
      >
        完了
      </button>
    </>
  );
}

export default FilterButtons;
