import { KeepPreview } from './KeepPreview.jsx'

export function KeepList({ notes, deleteNote,updateNote}) {
  return (
    <div className="keep-list">
      { notes.map(note =><KeepPreview note ={note} key={note.id} deleteNote={deleteNote} updateNote={updateNote}/>)}
    </div>
  )
}