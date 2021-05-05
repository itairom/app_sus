import {KeepEdit} from '../KeepEdit.jsx'

export class NoteToolBar extends React.Component {
    state = {

    }

    render() {
        const{updateNote,note,deleteNote} = this.props
        return (
            <section className="note-tool-bar">
                <div><KeepEdit updateNote={updateNote} note={note}/></div>
                <span className="note-delete"></span>
                <span onClick={() => deleteNote(note.id)}>
                <img className="delete-btn" src="apps/Keep/assets/icons/delete.png" alt=""/>
                </span>
            </section>

        )
    }

}