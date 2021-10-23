import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import Notification from './components/Notification';
import Footer from './components/Footer';
import noteService from '../src/services/notes';
import './index.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    
    const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
        id: notes.length + 1
    };

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote));
        setNewNote('');
        setSuccessMessage(`Note '${returnedNote.content}' added!`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5500);
      });
  };

  const handleNoteChange = (e) => {
      setNewNote(e.target.value);
  };

  const notesToShow = showAll 
      ? notes
      : notes.filter(note => note.important === true);

  const toggleImportanceOf = (id) => {
    const note = notes.find(note => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(err => {
        setErrorMessage(
          `the note '${note.content}' was already deleted from the server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        setNotes(notes.filter(note => note.id !== id))
      });
  };

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes);
      });
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      { errorMessage && <Notification className={"error"} message={errorMessage} />}
      { successMessage && <Notification className={"success"} message={successMessage} />}
      <div>
          <button onClick={() => setShowAll(!showAll)}>
              show {showAll ? 'important' : 'all'}
          </button>
      </div>
      <ul>
          {notesToShow.map(note => 
              <Note 
                key={note.id} 
                note={note}
                toggleImportance={() => toggleImportanceOf(note.id)}
              />
          )}
      </ul>
      <form onSubmit={addNote}>
          <input 
              value={newNote}
              onChange={handleNoteChange}
          />
          <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
};

export default App;