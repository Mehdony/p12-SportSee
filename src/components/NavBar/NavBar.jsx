import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

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


export default NavBar