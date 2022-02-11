import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Axios from "axios";

function Note(props) {
  function handleClick() {
    Axios.delete("http://localhost:3001/delete/" + props.id);
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
