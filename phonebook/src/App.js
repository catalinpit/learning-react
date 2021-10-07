import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas'
    }
  ]);

  const [ newName, setNewName ] = useState('');

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName
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

  return (
    <>
      <h2>Phone book</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </>
  )
};

export default App;