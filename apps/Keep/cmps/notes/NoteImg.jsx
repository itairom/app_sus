export function NoteImg({note}){
    return(
        <section className="note-img">

            <img src={note.info.url} alt="note.info.title"/>

            {/* <p>{note.info.url}</p> */}
        </section>

    )

}