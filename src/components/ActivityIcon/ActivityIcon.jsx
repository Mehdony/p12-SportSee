import React from "react";
import styles from "./ActivityIcon.module.css";

/**
 * The function returns a React component that displays an activity icon based on the props passed to
 * it.
 * @returns A React functional component called `ActivityIcon` is being returned. It takes in a `props`
 * object as an argument and returns a `div` element with a class name of `activityIcon` and an `img`
 * element with a source attribute that references an image file based on the `props.icon` value.
 */
const ActivityIcon = (props) => {
    
  return (
    <div className={styles.activityIcon}>
      <img src={`/assets/${props.icon}.png`} alt="zen" />
    </div>
  );
};

export default ActivityIcon;
