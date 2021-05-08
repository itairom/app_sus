export class KeepEdit extends React.Component {
    state = {
        note: {},
        isEdit: false,
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    toggleInputEdit = () => {
        this.setState({ isEdit: !this.state.isEdit })
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

    onUpdateNote = (ev) => {
        ev.preventDefault()
        this.props.updateNote(this.state.note)
        this.setState({ isEdit: !this.state.isEdit })
    }

    render() {
        const { isEdit, note } = this.state
        const { info, type, title } = note

        return (
            <section className="keep-edit">
                <img onClick={() => this.toggleInputEdit()} src="apps/Keep/assets/icons/edit.svg" alt="" />
                {isEdit &&
                    <form onSubmit={this.onUpdateNote}>
                        <input
                            type="text"
                            name={(type === "NoteTxt") ? "txt" : (type === "NoteTodos") ? "todos" : "url"}
                            value={(type === "NoteTxt") ? info.txt : (type === "NoteTodos") ? info.todos : info.url}
                            onChange={this.handleChange}
                            placeholder='Update the note'
                            autoComplete="off"
                        // required
                        />
                        {'title' in info &&
                            <input className="input-img-title"
                                type="text"
                                name="title"
                                value={title}
                                onChange={this.handleChange}
                                placeholder="Enter title"
                                autoComplete="off"
                            />
                        }
                        {'title' in info && <button className="btn-submit">✔</button>}

                    </form>
                }
            </section>
        )
    }
}