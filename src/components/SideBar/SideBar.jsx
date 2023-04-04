import React from "react";
import styles from "./SideBar.module.css";
import ActivityIcon from "../ActivityIcon/ActivityIcon";

const SideBar = () => {
  const icons = [
    "zen", "swim", "bike", "fit"
  ];
  return (
    <section className={styles.sideBarContainer}>
      <div className={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <ActivityIcon key={index} icon={icon} />
        ))}
      </div>
      <p className={styles.copiryght}>Copiryght, SportSee 2020</p>
    </section>
  );
};
export default SideBar;
