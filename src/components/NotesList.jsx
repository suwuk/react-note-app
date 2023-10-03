import React from "react";
import NoteItem from "./NoteItem";

function NotesList({notes, hapusNote, pindahNote}){
    return(
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} {...note} hapusNote={hapusNote} pindahNote={pindahNote}/>
                ))
            }
        </div>
    )
}

export default NotesList