export class noteUpdate extends React.Component {
    state = {
        isUpdate: false
    }

    noteUpdate = () => {
        // ev.stopPropagation()
        this.state.isUpdate = true
        this.setState({ isUpdate: this.state.isUpdate })
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
    


    render() {
        const { isUpdate } = this.state

        return (
            <section className="note-update" >
                <form onSubmit={this.noteUpdate}>
                    {isUpdate && <input type="text" name="txt" value={text} onChange={this.handleChange} placeholder={placeholder} />}
                </form>
            </section>
        )
    }
}