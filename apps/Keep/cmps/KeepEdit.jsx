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
        }), () => console.log(target.value))
    }

    onUpdateNote = (ev) => {
        ev.preventDefault()
        this.props.updateNote(this.state.note)
    }

    render() {
        const { isEdit: isUpdate, txt } = this.state
        return (
            <section className="keep-edit">
                <span onClick={() => this.toggleInputEdit()}>update-btn</span>
                <form onSubmit={this.onUpdateNote}>
                    {isUpdate && <input type="text" name="txt" value={txt} onChange={this.handleChange} />}
                </form>
            </section>
        )
    }
}