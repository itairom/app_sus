import { NoteToolBar } from './NoteToolBar.jsx'
export function NoteVideo({ note, deleteNote }) {
    return (
        <section className="note-video">
            <iframe width="200" height="133" src="https://www.youtube.com/watch?v=tAe2Q_LhY8g">
            </iframe>

            <NoteToolBar deleteNote={deleteNote} note={note} />
        </section>

    )

}