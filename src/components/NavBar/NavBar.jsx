import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

/**
 * Composant de barre de navigation.
 * @returns {JSX.Element} Élément JSX représentant la barre de navigation.
 */
 
const NavBar = () => {
  return (
   <nav className={styles.navContainer}>
        <img src="/assets/logo.png" alt="logo"  className={styles.logo} />
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to="/">Accueil</Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to="/">Profil</Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to="/">Réglage</Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} to="/">Communauté</Link>
            </li>
        </ul>


   </nav>
  )
}

NavBar.propTypes = {
    styles: PropTypes.shape({
      navContainer: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      navList: PropTypes.string.isRequired,
      navItem: PropTypes.string.isRequired,
      navLink: PropTypes.string.isRequired,
    }).isRequired,
  };

export default NavBar