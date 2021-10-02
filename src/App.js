import React, { useState } from 'react';
import Header from './Header';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  const heading = 'Unicafe Feedback';
  const [ good, setGood ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);

  const goodFeedback = () => setGood(good + 1);
  const badFeedback = () => setBad(bad + 1);
  const neutralFeedback = () => setNeutral(neutral + 1);

  return (
    <>
      <Header heading={heading} />
      <Button onClick={goodFeedback} text='good' />
      <Button onClick={badFeedback} text='bad' />
      <Button onClick={neutralFeedback} text='neutral' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}

export default App;
