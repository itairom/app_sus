export class KeepAdd extends React.Component {

    state = {
        note: {
            type: "NoteText",
            isPinned: false,
            info: {
                txt: ''
            }
        },
        placeholder:'Enter your text here'
    }

    componentDidMount() {
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                info:{
                    ...prevState.note.info,
                    [field]: value
                }
            }
        }))
    }

    changeInput = (type) => {
        // switch
    }

    onAddNote=(ev)=>{
        ev.preventDefault()
        this.props.addNote(this.state.note)
        console.log(this.state);
    }

    render() {
        const { text } = this.state.note
        const { placeholder } = this.state

        return (
            <section className="note-add">
                <form onSubmit={this.onAddNote}>
                <input type="text" name="txt" value={text} onChange={this.handleChange} placeholder={placeholder} />
                </form>
                <div>
                    <div onClick={this.changeInput("noteText")}>text</div>
                    <div onClick={this.changeInput}>image</div>
                    <div onClick={this.changeInput}>video</div>
                    <div onClick={this.changeInput}>todos</div>
                </div>

            </section>
        )
    }
}
