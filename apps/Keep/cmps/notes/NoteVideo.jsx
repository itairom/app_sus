import { NoteToolBar } from './NoteToolBar.jsx'
export function NoteVideo({ note, deleteNote }) {
    return (
        <section className="note-video">
            <iframe width="200" height="150" 
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <p>My Favorite song!!</p>
            <NoteToolBar deleteNote={deleteNote} note={note} />
        </section>

    )

}