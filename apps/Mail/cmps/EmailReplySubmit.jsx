
export class EmailReplySubmit extends React.Component {

    state = {
        reply: {
            subject: '',
            mailId: null
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.setState(prevState => ({
            reply: {
                ...prevState.reply,
                mailId: this.props.id
            }
        }))
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            reply: {
                ...prevState.reply,
                [field]: value
            }
        }))
    }

    render() {

        const { subject, mailId } = this.state.reply
        return (
        <div className ="reply-container">
            <form className="reply-form flex" onSubmit={() => { this.props.onSaveReply(this.state.reply) }}>
                <label>
                    <textarea type="text" name="subject" value={subject} onChange={this.handleChange} />
                </label>
                <button>Send</button>
            </form>
            </div>
        )
    }
}