import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import AddIcon from "@material-ui/icons/Add";

function MainContent(props) {
  const [name, setName] = useState({
    title: "",
    content: "",
  });

  const [drag, setDrag] = useState(false);

  const inputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setName((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  const onAddValue = () => {
    if(name.title === "" && name.content === ""){
      alert('Please Write a note')
    }
    else{
      props.addbox(name);
    }
    setName({
      title: "",
      content: "",
    });
    return setDrag(false);
  };

  const showDrag = () => {
    return setDrag(true);
  };

  const closeDrag = () => {
    return setDrag(false);
  };

  return (
    <>
      <div className="card" onDoubleClick={closeDrag}>
        {drag ? (
          <input
            className="input"
            name="title"
            value={name.title}
            onChange={inputChange}
            type="text"
            placeholder="Title"
          />
        ) : null}

        <textarea
          className="textArea"
          name="content"
          value={name.content}
          onChange={inputChange}
          onClick={showDrag}
          placeholder="Write a note"
        />
        {drag ? (
          <Button className="addButton" onClick={onAddValue}>
            <AddIcon></AddIcon>
          </Button>
        ) : null}
      </div>
    </>
  );
}

export default MainContent;
