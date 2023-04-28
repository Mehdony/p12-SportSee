import React from "react";
import styles from "./SideBar.module.css";
import ActivityIcon from "../ActivityIcon/ActivityIcon";
import PropTypes from 'prop-types';


/**
 * Affiche une barre latérale avec une liste d'icônes.
 *
 * @function
 * @returns {JSX.Element} Barre latérale avec icônes et texte de droit d'auteur.
 */

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

ActivityIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default SideBar;
