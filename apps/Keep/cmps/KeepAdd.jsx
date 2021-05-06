export class KeepAdd extends React.Component {

    state = {
        note: {
            type: "NoteTxt",
            isPinned: false,
            info: {
                txt: ''
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        placeholder: 'Enter text'
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
        }),()=>console.log(this.state))
    }

    changeInput = (type) => {
        switch (type) {
            case 'NoteTxt':
                return this.setState({
                    note: {
                        ...this.state.note,
                        type,
                        info: {
                            txt: ''
                        }
                    },
                    placeholder: 'Enter text'
                })
            case 'NoteVideo':
            case 'NoteImg':
                return this.setState({
                    note: {
                        ...this.state.note,
                        type,
                        info: {
                            url: '',
                            title: ''
                        }
                    },
                    placeholder: 'Enter url'
                })
            case 'NoteTodos':
                return this.setState({
                    note: {
                        ...this.state.note,
                        type,
                        info: {
                            title: "ToDos",
                            todos: [
                                { txt: "Do that", doneAt: null },
                                { txt: "Do this", doneAt: Date.now() }
                            ]
                        }
                    },
                    placeholder: 'Enter comma separated todo\'s'
                })
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
        const { placeholder, note } = this.state
        const { info,type } = note
        const { url, txt, todos, title } = info

        return (
            <section className="note-add">
                <form onSubmit={this.onAddNote}>
                    <input
                        type="text"
                        name={(type==="NoteTxt")?"txt": (type==="NoteTodos")?"todos":"url" }
                        value={url || txt || todos}
                        onChange={this.handleChange}
                        placeholder={placeholder}
                        autoComplete="off"
                    />
                    {'title' in info &&
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                            placeholder="Enter title"
                            autoComplete="off"
                        />}
                </form>
                <div className="note-add-buttons">
                    <div onClick={() => this.changeInput("NoteTxt")}>
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
