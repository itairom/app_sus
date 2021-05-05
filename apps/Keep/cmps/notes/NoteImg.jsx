import {NoteToolBar} from './NoteToolBar.jsx'
export function NoteImg({note,deleteNote}){
    return(
        <section className="note-img">

            <img src={note.info.url} alt={note.info.title}/>
            <NoteToolBar deleteNote={deleteNote} note={note}/>


        </section>

    )

}