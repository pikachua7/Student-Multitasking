import React, { useState, useEffect } from "react";
import Header from "./notes/Header";
import Note from "./notes/Note";
import Create from "./notes/Create";
import './notes/App.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Create onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;

// import React from 'react'

// const Notes = () => {
//   return (
//     <div>
//       <h1>H</h1>
//     </div>
//   )
// }

// export default Notes
