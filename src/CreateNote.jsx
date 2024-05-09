import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CreateNote (props){


    const [expand,setExpand] = useState(false);

    const [note,setNote] = useState({
        title : '',
        content : '',
    });

    const inputEvent = (event)=>{



        const {name,value}= event.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            };
        });

        console.log(note);
    }

    const addEvent =()=>{
        props.passNote(note);

        setNote({
            title : '',
            content : '',
        })
    };

    const expandIt=()=>{
        setExpand(true);
    }
    const backToNormal=()=>{
        setExpand(false);
    }


    return(
        <>
             <div className="main_note" onDoubleClick={backToNormal}>
                <form >
                    {expand?
                    <input type="text" name="title" value={note.title}  onChange={inputEvent} placeholder="Title" autoComplete="off"/>
                    : null}

                    <textarea placeholder="Write a note..." name="content"  value={note.content}  onChange={inputEvent}  cols="" rows="" onClick={expandIt}  ></textarea>

                    {expand ?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button>
                    : null}
                </form>
             </div>
        </>
    );
};

export default CreateNote;