import { NoteToolBar } from './NoteToolBar.jsx'
export function NoteImg({ note, deleteNote, updateNote, onPinnedNote, onChangeBgc }) {
    return (
        <section className="note-img" style={{ backgroundColor: note.style.backgroundColor }}>
            <img className="keep-img" src={note.info.url} alt={note.info.title} />
            <p>{note.info.title}</p>
            <NoteToolBar onChangeBgc={onChangeBgc} onPinnedNote={onPinnedNote} deleteNote={deleteNote} note={note} updateNote={updateNote} />
        </section>

    )

}