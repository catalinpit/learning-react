import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack App Development';
  const part1 = 'Fundamentals of React';
  const exercise1 = 10;
  
  const part2 = 'Using props to pass data';
  const exercise2 = 7;

  const part3 = 'State of a component';
  const exercise3 = 14;

  return (
    <>
      <Header course={course} />
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
        exercise1={exercise1}
        exercise2={exercise2}
        exercise3={exercise3}
      />
      <Total exercises={exercise1 + exercise2 + exercise3}/>
    </>
  )
}

export default App;
