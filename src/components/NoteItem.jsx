import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({id,title,body,createdAt,archived,hapusNote,pindahNote}){
    function hapus(id){
        hapusNote(id)
    }
    
    function pindah(id){
        pindahNote(id)
    }

    return(
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={hapus.bind(this,id)}>Delete</button>
                <button className="note-item__archive-button" onClick={pindah.bind(this,id)}>{archived ? 'Pindahkan' : 'Arsipkan'}</button>
            </div>
        </div>
    )
}

export default NoteItem