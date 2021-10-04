import React from "react";

const Statistics = ({ text, value }) => {
    return (
        <>
            <p>{text} {value > 0 ? value : 0}</p>
        </>
    )
};

export default Statistics;