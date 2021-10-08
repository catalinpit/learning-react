import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setNewSearch] = useState('');

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

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <h2>Phone book</h2>
      Filter persons: <input
        type="text"
        value={search}
        onChange={handleSearchChange}
      />
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input
            type="text"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Number: <input
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtered.map(p => {
        return <p key={p.name}>{p.name} - {p.number}</p>
      })}
    </>
  )
};

export default App;