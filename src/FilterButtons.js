import React from "react";
import styles from "./style.module.css";

function FilterButtons({ onFilter }) {
  return (
    <>
      <button onClick={() => onFilter("all")}>すべて</button>
      <button onClick={() => onFilter("active")}>未完了</button>
      <button onClick={() => onFilter("completed")}>完了</button>
    </>
  );
}

export default FilterButtons;
