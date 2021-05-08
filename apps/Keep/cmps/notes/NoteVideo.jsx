import { NoteToolBar } from './NoteToolBar.jsx'
export function NoteVideo({ note, deleteNote, onPinnedNote, onChangeBgc }) {
    return (
        <section className="note-video" style={{ backgroundColor: note.style.backgroundColor }}>
            <iframe width="200" height="150"
                frameBorder="0" src={note.info.url}>
            </iframe>
            <p>My Favorite song!!</p>
            <NoteToolBar onChangeBgc={onChangeBgc} onPinnedNote={onPinnedNote} deleteNote={deleteNote} note={note} />
        </section>

    )

}