import { NoteToolBar } from './NoteToolBar.jsx'

export function NoteTxt({ note, deleteNote, updateNote }) {
    return (
        <section className="note-txt">
            <textarea>{note.info.txt}</textarea>
            <NoteToolBar deleteNote={deleteNote} updateNote={updateNote} note={note} />
        </section>
    )
}