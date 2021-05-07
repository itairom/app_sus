import { KeepEdit } from '../KeepEdit.jsx'

export class NoteToolBar extends React.Component {

    render() {
        const { updateNote, note, deleteNote } = this.props
        return (
            <section className="note-tool-bar">
                <KeepEdit updateNote={updateNote} note={note} />
                <img src="apps/Keep/assets/icons/pinned.svg" alt="" />

                <img src="apps/Keep/assets/icons/colors.svg" alt="" />

                <img onClick={() => deleteNote(note.id)} className="delete-btn" src="apps/Keep/assets/icons/trash.svg" alt="" />
            </section>

        )
    }

}
