import React from "react";
import styles from "./Nutrients.module.css";

function Nutrients(props) {
  console.log(props);
  return (
    <div className={styles.nutrientContainer}>
      <div className={`${styles.iconContainer} ${styles[props.value.styling]}`}>
        <img src={`/assets/nutrients/${props.name}.svg`} alt="" />
      </div>
      <div className={styles.nutrientInfo}>
        <p className={styles.nutrientValue}>
          {props.value.count.toLocaleString('en-US')}
          {props.value.unit}
        </p>
        <p className={styles.nutrientName}>{props.value.nutType}</p>
      </div>
    </div>
  )
}

export default Nutrients;
