
export class NoteTxt extends React.Component {

    state = {
        isUpdate :false
    }

    noteUpdate = () => {
        // ev.stopPropagation()
        this.state.isUpdate = true
        this.setState({isUpdate: this.state.isUpdate})
    }
    
    

    render() {
        const{isUpdate} = this.state

        return (
            <section className="note-txt" onClick={this.noteUpdate}>
                <p>{this.props.note.info.txt}</p>
                {isUpdate && <input type="text" />}
                <span onClick={() => this.props.deleteNote(this.props.note.id)}>X</span>
            </section>
        )
    }
}