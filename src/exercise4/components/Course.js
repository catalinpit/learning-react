import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
    return (
        <>
            <Header heading={course.name} />
            <Content course={course} />
            <Total parts={course.parts} />
        </>
    )
};

export default Course;