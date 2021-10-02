import React from "react";

const Statistics = ({ good, bad, neutral }) => {
    return (
        <>
            <h2>Statistics</h2>
            <p>Good {good}</p>
            <p>Bad {bad}</p>
            <p>Neutral {neutral}</p>
        </>
    )
};

export default Statistics;