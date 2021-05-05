export function NoteImg({note,deleteNote}){
    return(
        <section className="note-img">

            <img src={note.info.url} alt={note.info.title}/>
            <span onClick={() => deleteNote(note.id)}>X</span>


        </section>

    )

}