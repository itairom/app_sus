export class KeepAdd extends React.Component {

    state = {
        typeNote:{
            text: ''
        }
    }

    componentDidMount() {
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        this.setState(prevState => ({
            car: {
                ...prevState.typeNote,
                [field]: value
            }
        }))
    }


    render() {
        const {text} = this.state.typeNote
        return (
            <section className="note-add">
                <input type="text" name="text" value={text} onChange={this.handleChange} />
                <div>
                    <div>logos</div>
                </div>

            </section>
        )
    }
}
