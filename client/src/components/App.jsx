import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "",
      content: "",
      _id: ""
    }
  ]);

  useEffect(() => {
    fetch("/notes").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setNotes(jsonRes))
      .catch(err => console.log(err));
  }, [notes]);

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
  };

  return (
    <div>
      <div className="top-area">
      <Header />
      <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
        <div id="footer">
        <Footer />
        </div> 
    </div>
  );
}

export default App;

