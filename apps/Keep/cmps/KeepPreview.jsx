import { NoteTxt } from './notes/NoteTxt.jsx' 
import { NoteImg } from './notes/NoteImg.jsx' 
import { NoteTodos } from './notes/NoteTodos.jsx' 
import { NoteVideo } from './notes/NoteVideo.jsx'

export function KeepPreview({ note }) {

        switch (note.type) {
            case 'NoteText':
                return <NoteTxt note={note} />
            case 'NoteImg':
                return <NoteImg note={note} />
            case 'NoteTodos':
                return <NoteTodos note={note} />
            case 'NoteVideo':
                return <NoteVideo note={note} />
            default:
                return <p>couldn't find note</p>
        }

}