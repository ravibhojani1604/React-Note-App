import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function Note(props) {
const deleteBtn = () =>{
  return props.text(props.id);
}

  return (
    <>
      <div className="cardBox">
      <p>{props.title}</p>
        <p className="content" >{props.content}</p>
       <Button className="deleteBtn" onClick={deleteBtn}>
          <DeleteOutlineIcon />
        </Button>
      </div>
    </>
  );
}

export default Note;
