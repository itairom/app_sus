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
        }), () => console.log(this.state.note))
    }

    onUpdateNote = (ev) => {
        ev.preventDefault()
        this.props.updateNote(this.state.note)
        this.setState({ isEdit: !this.state.isEdit })
    }

    render() {
        const { isEdit, txt } = this.state
        return (
            <section className="keep-edit">
                <span onClick={() => this.toggleInputEdit()}>
                    <img className="edit-btn" src="apps/Keep/assets/icons/edit.png" alt="" />
                </span>
                <form onSubmit={this.onUpdateNote}>
                    {isEdit &&
                        <input type="text"
                            name="txt"
                            value={txt}
                            onChange={this.handleChange}
                            placeholder={txt}
                            autoComplete="off"/>
                            }
                </form>
            </section>
        )
    }
}