export function NoteVideo({note,deleteNote}){
    return(
        <section className="note-video">
            <p>{note.info.txt}</p>
            <span onClick={() => deleteNote(note.id)}>X</span>
        </section>

    )

}