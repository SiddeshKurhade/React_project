
import './App.css';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
import React, { useState } from 'react';


function App() {

  const [addItem,setAddItem] = useState([]);

  const addNote=(note)=>{
    // alert("Cliked")
    setAddItem((prevData)=>{
      return [...prevData,note];
    });

    console.log(note);
  }

  const onDelete=(id)=>{
    setAddItem((olddata)=>olddata.filter((currdata,index)=>{
      return index !== id;
    }))
  }
  return (
    <>
      <Header/>
      <CreateNote 
        passNote={addNote}
      />

      {addItem.map((val,index)=>{
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem = {onDelete}
        />
      })}
      <Footer/>
    </>
  );
}

export default App;
