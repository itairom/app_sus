import { NoteTxt } from './notes/NoteTxt.jsx'
import { NoteImg } from './notes/NoteImg.jsx'
import { NoteTodos } from './notes/NoteTodos.jsx'
import { NoteVideo } from './notes/NoteVideo.jsx'

export function KeepPreview({ note, deleteNote, updateNote,onPinnedNote,onChangeBgc}) {

    switch (note.type) {
        case 'NoteTxt':
            return <NoteTxt onChangeBgc={onChangeBgc} onPinnedNote={onPinnedNote} note={note} deleteNote={deleteNote} updateNote={updateNote} />
        case 'NoteImg':
            return <NoteImg onChangeBgc={onChangeBgc} onPinnedNote={onPinnedNote} note={note} deleteNote={deleteNote} updateNote={updateNote} />
        case 'NoteTodos':
            return <NoteTodos onChangeBgc={onChangeBgc} onPinnedNote={onPinnedNote} note={note} deleteNote={deleteNote} updateNote={updateNote} />
        case 'NoteVideo':
            return <NoteVideo onChangeBgc={onChangeBgc} onPinnedNote={onPinnedNote} note={note} deleteNote={deleteNote} updateNote={updateNote} />
        default:
            return null
    }

}