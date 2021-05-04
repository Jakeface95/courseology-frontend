import React from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import styles from "./App.module.scss";
import Card from "./components/Card";

const App = () => {
    return (
        <>
        <section className={styles.nav}>
            <NavBar />
        </section>
        <section >
            <SearchBar />
        </section>
        <section>
            <Card />
        </section>
        </>
    );
};

export default App
