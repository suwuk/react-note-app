import React, { useState } from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteBody({addNote,hapusNote,pindahNote,archiveNotes,activeNotes}){
    return(
        <div className="note-app__body">
            <NoteInput addNote={addNote}/>
            <h2>Catatan Aktif</h2>
            {activeNotes.length > 0 ? <NotesList notes={activeNotes} hapusNote={hapusNote} pindahNote={pindahNote}/> : <p className="notes-list__empty-message">Tidak ada Catatan</p>}
            <h2>Arsip</h2> 
            {archiveNotes.length > 0 ? <NotesList notes={archiveNotes} hapusNote={hapusNote} pindahNote={pindahNote}/> : <p className="notes-list__empty-message">Tidak ada Catatan Arsip</p>}
        </div>
    )
}

export default NoteBody