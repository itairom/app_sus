import { KeepPreview } from './KeepPreview.jsx'

export function KeepList({ notes, deleteNote,updateNote,onPinnedNote,onChangeBgc}) {
  return (
    <div className="keep-list">
      { notes.map(note =><KeepPreview onChangeBgc={onChangeBgc} onPinnedNote={onPinnedNote} note ={note} key={note.id} deleteNote={deleteNote} updateNote={updateNote}/>)}
    </div>
  )
}