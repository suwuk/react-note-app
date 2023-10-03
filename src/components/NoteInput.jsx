import React, { useState } from "react";

function NoteInput({addNote}){
    let [sisaKarakter,setSisaKarakter] = useState(50);
    let [judul,setJudul] = useState('');
    let [isiCatatan,setIsiCatatan] = useState('');
    
    function sisaChar(e){
        setJudul(e.target.value.slice(0, 50));
        e.target.value.length >= 50 ?  setSisaKarakter(0) : setSisaKarakter(50 - e.target.value.length)      
    }

    function catatanIsi(e){
        setIsiCatatan(e.target.value);
    }

    function save(e){
        e.preventDefault()
        const dataBaru = {
            id : +new Date(),
            title : judul,
            body : isiCatatan,
            archived: false,          
            createdAt: new Date().toString()
        }
        addNote({...dataBaru}); 
    }

    return(
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form onSubmit={save}>
                <p className="note-input__title__char-limit">Sisa Karakter: {sisaKarakter}</p>
                <input className="note-input__title" type="text" placeholder="Masukkan Judul" required value={judul} onChange={sisaChar}/>
                <textarea className="note-input__body" type="text" placeholder="isi Catatan" required value={isiCatatan} onChange={catatanIsi}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NoteInput