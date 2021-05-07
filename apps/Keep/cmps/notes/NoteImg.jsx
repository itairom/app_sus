import {NoteToolBar} from './NoteToolBar.jsx'
export function NoteImg({note,deleteNote,updateNote}){
    return(
        <section className="note-img">
            <img className="keep-img" src={note.info.url} alt={note.info.title}/>
            <p>{note.info.title}</p>
            <NoteToolBar deleteNote={deleteNote} note={note} updateNote={updateNote}/>
        </section>

    )

}