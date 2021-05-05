export class KeepAdd extends React.Component {

    state = {
        note: {
            type: "NoteText",
            isPinned: false,
            info: {
                txt: ''
            }
        },
        placeholder: 'Enter your text here'
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

    setPlaceholder=(text)=>{
        // const { placeholder } = this.state
        this.setState({placeholder:`Enter your ${text} here`})
    }
    
    changeInput = (type) => {
        
        // console.log(type);
        switch (type) {
            case 'NoteText':
                return this.setPlaceholder('jkjklhlj')
            case 'NoteImg':
                return 
            case 'NoteTodos':
                return 
            case 'NoteVideo':
                return 
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
    const { text } = this.state.note
        const { placeholder } = this.state

        return (
            <section className="note-add">
                <form onSubmit={this.onAddNote}>
                    <input type="text" name="txt" value={text} onChange={this.handleChange} placeholder={placeholder} />
                </form>
                <div className="note-add-buttons">
                    <div onClick={()=>this.changeInput("noteText")}>
                        <img src="apps/Keep/assets/icons/a.png" alt=""/>
                    </div>
                    <div onClick={()=>this.changeInput("noteImg")}>
                    <img src="apps/Keep/assets/icons/photo.png" alt=""/>
                    </div>
                    <div onClick={()=>this.changeInput("noteVideo")}>
                    <img src="apps/Keep/assets/icons/youtube.png" alt=""/>
                    </div>
                    <div onClick={()=>this.changeInput("noteTodos")}>
                    <img src="apps/Keep/assets/icons/list.png" alt=""/>
                    </div>
                </div>

            </section>
        )
    }
}
