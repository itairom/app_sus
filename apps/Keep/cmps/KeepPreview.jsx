import { NoteTxt } from './notes/NoteTxt.jsx'
import { NoteImg } from './notes/NoteImg.jsx'
import { NoteTodos } from './notes/NoteTodos.jsx'
import { NoteVideo } from './notes/NoteVideo.jsx'

export function KeepPreview({ note, deleteNote, updateNote }) {


    switch (note.type) {
        case 'NoteText':
            return <NoteTxt note={note} deleteNote={deleteNote} updateNote={updateNote} />
        case 'NoteImg':
            return <NoteImg note={note} deleteNote={deleteNote} />
        case 'NoteTodos':
            return <NoteTodos note={note} deleteNote={deleteNote} />
        case 'NoteVideo':
            return <NoteVideo note={note} deleteNote={deleteNote} />
        default:
            return <p>couldn't find note</p>
    }


}