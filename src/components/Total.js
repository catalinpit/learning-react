import React from "react";

const Total = ({ parts }) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue.exercises;
    const total = parts.reduce(reducer, 0);

    return <p>Total number of exercises: {total}</p>
};

export default Total;