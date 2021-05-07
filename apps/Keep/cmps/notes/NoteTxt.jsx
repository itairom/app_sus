import { NoteToolBar } from './NoteToolBar.jsx'

export function NoteTxt({ note, deleteNote, updateNote }) {
    return (
        <section className="note-txt">
            <p>{note.info.txt}</p>
            <NoteToolBar deleteNote={deleteNote} updateNote={updateNote} note={note} />
        </section>
    )
}