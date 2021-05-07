import {NoteToolBar} from './NoteToolBar.jsx'

export function NoteTxt({note,deleteNote,updateNote}){
    return(
            <section className="note-txt">
                <div  className="input-txt">
                <p>{note.info.txt}</p>
                </div>
                <NoteToolBar deleteNote={deleteNote} updateNote={updateNote} note={note}/>
            </section>
        )
}