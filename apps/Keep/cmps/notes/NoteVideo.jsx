import { NoteToolBar } from './NoteToolBar.jsx'
export function NoteVideo({ note, deleteNote }) {
    return (
        <section className="note-video">
            {/* <iframe width="200" height="133" src={note.info.src}>
            </iframe> */}

            <NoteToolBar deleteNote={deleteNote} note={note} />
        </section>

    )

}