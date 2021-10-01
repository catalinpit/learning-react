import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = {
    name: 'Half Stack App Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} /> 
    </>
  )
}

export default App;
