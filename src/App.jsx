import React, {useState} from "react";
import NavBar from "./components/NavBar";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NewQuoteMaker from "./components/NewQuoteMaker";

const App = () => {
    const [Quotes, setQoutes] = useState({});

    const grabQuotes = () => {
        fetch("lewis-312709.nw.r.appspot.com/quotes")
        .then(res => res.json())
        .then((res) => {
            const newQuote = res.quote.map(newQuoteData);
            setQoutes(newQuote);
          })
        .catch(err => console.log(err))
    }

    const getCardJsx = (quote) => (
        <div className={styles.card} key={quote.quoteID}>
          <Card quote={Quotes} />
        </div>
      );

    const newQuoteData = (quote) => {
    const newQuoteComp = {
        quoteID: quote.quoteID,
        companyName: quote.companyName,
        policyLength: quote.policyLength,
        ageOfDriver: quote.ageOfDriver,
        costOfPolicy: quote.costOfPolicy,
    };
    return newQuoteComp;
    };

    return (
        <>
        <section className={styles.nav}>
            <NavBar />
        </section>
        <section >
            <NewQuoteMaker />
        </section>
        <section className={styles.content}>{getCardJsx(grabQuotes)}</section>
        </>
    );
};

export default App
