import React from "react";
import styles from "./ActivityIcon.module.css";

const ActivityIcon = (props) => {
    
  return (
    <div className={styles.activityIcon}>
      <img src={`/assets/${props.icon}.png`} alt="zen" />
    </div>
  );
};

export default ActivityIcon;
