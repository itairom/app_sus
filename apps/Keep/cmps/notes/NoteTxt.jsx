import { NoteToolBar } from './NoteToolBar.jsx'

export function NoteTxt({ note, deleteNote, updateNote,onPinnedNote,onChangeBgc}) {
    return (
        <section className="note-txt" style={{ backgroundColor: note.style.backgroundColor }}>
            <textarea readOnly value={note.info.txt}></textarea>
            <NoteToolBar onChangeBgc={onChangeBgc}  onPinnedNote={onPinnedNote} deleteNote={deleteNote} updateNote={updateNote} note={note} />
        </section>
    )
}