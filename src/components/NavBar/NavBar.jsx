import React from 'react';
import logo from "../../assets/thumb16.jpg";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    
    
    return (
        <nav className={styles.navFlex}>
            <img src={logo} alt="Befuddled logo"/>
            <h1>Befuddled</h1>
        </nav>
    )
}

export default NavBar
