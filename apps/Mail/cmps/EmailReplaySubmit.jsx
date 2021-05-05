

export class EmailReplaySubmit extends React.Component {

    state = {
        replay: {
            subject: '',
            mailId: null
        }
    }

    componentDidMount() {
        console.log(this.props);
       this.setState(prevState => ({
            replay: {
                ...prevState.replay,
                mailId: this.props.id
            }
        }))
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            replay: {
                ...prevState.replay,
                [field]: value
            }
        }))
    }

    render() {


        const { subject,mailId } = this.state.replay
        return (
            <form className="replay-form flex" onSubmit={() => { this.props.onSaveReplay(this.state.replay) }}>
                <label>body
                    <textarea type="text" name="subject" value={subject} onChange={this.handleChange} />
                </label>
                <button>Send</button>
            </form>
        )
    }


}