import { KeepEdit } from '../KeepEdit.jsx'
import { ColorCmp } from '../ColorCmp.jsx'

export class NoteToolBar extends React.Component {
    state = {
        isColorShown: false
    }

    render() {
        const { updateNote, note, deleteNote, onPinnedNote,onChangeBgc } = this.props
        return (
            <section className="note-tool-bar">
                <KeepEdit updateNote={updateNote} note={note} />
                <img onClick={() => onPinnedNote(note.id)} src="apps/Keep/assets/icons/pinned.svg" alt="" />

                <img onClick={() => this.setState({ isColorShown: !this.state.isColorShown })} src="apps/Keep/assets/icons/colors.svg" alt="" />
                {this.state.isColorShown && <ColorCmp note={note} onChangeBgc={onChangeBgc} />}

                <img onClick={() => deleteNote(note.id)} className="delete-btn" src="apps/Keep/assets/icons/trash.svg" alt="" />
            </section>

        )
    }

}
