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

  const totalFeedback = good + bad + neutral;

  return (
    <>
      <Header heading={heading} />
    
      <Button onClick={goodFeedback} text='good' />
      <Button onClick={badFeedback} text='bad' />
      <Button onClick={neutralFeedback} text='neutral' />

      <h2>Statistics</h2>
      <Statistics text="good" value={good} />
      <Statistics text="bad" value={bad} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="total" value={good + bad + neutral} />
      <Statistics text="average" value={(good - bad) / totalFeedback} />
      <Statistics text="average" value={(good / totalFeedback) * 100} />
    </>
  )
}

export default App;
