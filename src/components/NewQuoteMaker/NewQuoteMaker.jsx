import React, {useState} from 'react'
import styles from "./NewQuoteMaker.module.scss";

const NewQuoteMaker = () => {
    
    const [companyName, setCompanyName] = useState("");
    const [policyLength, setPolicyLength] = useState("");
    const [ageOfDriver, setAgeOfDriver] = useState("");
    const [costOfPolicy, setCostOfPolicy] = useState("");

    const submitQuote = (event) => {
        event.preventDefault()
        fetch("lewis-312709.nw.r.appspot.com/quote/", {method: 'POST', body: companyName, policyLength, ageOfDriver, costOfPolicy})
    }
    
    return (
        <section className={styles.newQuote}>
            <input type="text" placeholder="Please enter the company name" onInput={(event) => setCompanyName(event.target.value)}/>
            <input type="text" placeholder="Please enter the policy length" onInput={(event) => setPolicyLength(event.target.value)}/>
            <input type="text" placeholder="Please enter the age of the driver" onInput={(event) => setAgeOfDriver(event.target.value)}/>
            <input type="text" placeholder="Please enter the cost of the policy" onInput={(event) => setCostOfPolicy(event.target.value)}/>
            <button onClick={(event) => submitQuote(event)}>Submit</button>
        </section>
    )
}

export default NewQuoteMaker
