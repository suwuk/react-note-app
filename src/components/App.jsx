import React from "react";
import Header from "./Header";
import {getInitialData} from "../utils/index";
import NoteBody from "./NoteBody";

function App(){

    let [notes,setNotes] = React.useState(getInitialData());
    let [searching,setSearching] = React.useState('');
    let filteredNotes = !searching ? notes : notes.filter((note) => note.title.toLowerCase().includes(searching));
    const activeNotes = filteredNotes.filter((note) => {return note.archived === false});
    const archiveNotes = filteredNotes.filter((note) => {return note.archived === true});

    function addData({id,title,body,archived,createdAt}){
        setNotes([...notes,{id,title,body,archived,createdAt}]) 
    }

    function hapusData(noteId){
        let cari = notes.findIndex((note) => note.id === noteId);
        if(cari !== -1){
            notes.splice(cari,1);
            setNotes([...notes]);
        }else{
            setNotes(notes);
        }
    }
    
    function pindahData(noteId){
        let cariIndex = notes.findIndex((note) => note.id === noteId);
        let cari = notes.find((note) => note.id === noteId);
 
        notes[cariIndex] = {
            ...cari,
            archived: !cari.archived ? true : false    
        }

        setNotes([...notes]);
    }
    
    
    function search(text = ''){   
        setSearching(text)
    }

    return(
        <>
            <Header search={search} pencarian={searching}/>
            <NoteBody addNote={addData} hapusNote={hapusData} pindahNote={pindahData} activeNotes={activeNotes} archiveNotes={archiveNotes}/>
        </>
    )
}

export default App;

