import {NoteToolBar} from './NoteToolBar.jsx'
export function NoteVideo({note,deleteNote}){
    return(
        <section className="note-video">
            <p>{note.info.txt}</p>
            <NoteToolBar deleteNote={deleteNote} note={note}/>
        </section>

    )

}