import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber
    };

    const hasVal = persons.some(person => person.name === newPerson.name);

    if (hasVal) {
      alert(`you already added ${newName}!`)
    } else {
      setPersons(persons.concat(newPerson));
    }

    setNewName('');
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <>
      <h2>Phone book</h2>
      Filter persons: <input 
      />
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} - {person.number}</p>)}
    </>
  )
};

export default App;