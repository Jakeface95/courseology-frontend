import React from 'react'
import styles from "./Card.module.scss";


const Card = (props) => {
    const { companyName, policyLength, ageOfDriver, costOfPolicy } = props.quote;
    
    return (
        <div className={styles.cardFront}>
            <h1>{companyName}</h1>
            <h2>{policyLength}</h2>
            <h2>{ageOfDriver}</h2>
            <h2>{costOfPolicy}</h2>
        </div>
    )
}

export default Card
