export class KeepAdd extends React.Component {

    state = {
        note: {
            type: "NoteText",
            isPinned: false,
            info: {
                txt: ''
            }
        },
        placeholder: 'Enter Text'
    }

    componentDidMount() {
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                info: {
                    ...prevState.note.info,
                    [field]: value
                }
            }
        }))
    }

    setPlaceholder = (text) => {
        this.setState({ placeholder: `Enter ${text}` })
    }

    changeInput = (type) => {

        switch (type) {
            case 'NoteText':
                return this.setPlaceholder('Text')
            case 'NoteImg':
                return this.setPlaceholder('image url')
            case 'NoteTodos':
                return this.setPlaceholder('comma separated list')
            case 'NoteVideo':
                return this.setPlaceholder('video url')
            default:
                return
        }
    }

    onAddNote = (ev) => {
        ev.preventDefault()
        this.props.addNote(this.state.note)
        console.log(this.state);
    }


    render() {
        const { text, type } = this.state.note
        const { placeholder } = this.state

        return (
            <section className="note-add">
                <form onSubmit={this.onAddNote}>
                    <input type={type} name="txt" value={text} onChange={this.handleChange} placeholder={placeholder} />
                </form>
                <div className="note-add-buttons">
                    <div onClick={() => this.changeInput("NoteText")}>
                        <img src="apps/Keep/assets/icons/a.png" alt="" />
                    </div>
                    <div onClick={() => this.changeInput("NoteImg")}>
                        <img src="apps/Keep/assets/icons/photo.png" alt="" />
                    </div>
                    <div onClick={() => this.changeInput("NoteVideo")}>
                        <img src="apps/Keep/assets/icons/youtube.png" alt="" />
                    </div>
                    <div onClick={() => this.changeInput("NoteTodos")}>
                        <img src="apps/Keep/assets/icons/list.png" alt="" />
                    </div>
                </div>

            </section>
        )
    }
}
