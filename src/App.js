import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Note from "./Note";
import { useState } from "react";

function App() {
  const [value, setVal] = useState([]);
  const onAddValue = (props) => {
    if(props === null){
     return alert('Please Fill Note');
    }
    else {
      setVal((oldValue) => {
        return [...oldValue, props];
      });
    }
  };

  const deleteBtn = (id) =>{
   return setVal((oldValue)=>{
    return  oldValue.filter((value,index)=>{
       return id !== index;
     })
   })
  }


  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MainContent addbox={onAddValue} />
        <div className="mainCard">
          {value.map((valueBox,index) => {
         return <Note key={index} id={index} title={valueBox.title} content={valueBox.content}  text={deleteBtn}/>;
          })}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
