import { mailService } from '../services/mail-service.js'

export class EmailReplySubmit extends React.Component {
    state = {
        reply: {
            subject: '',
            mailId: null
        }
    }

    componentDidMount() {
        this.setState(prevState => ({
            reply: {
                ...prevState.reply,
                mailId: this.props.match.params.id
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

    onSaveReply = (reply) => {
        mailService.saveReply(reply)
            .then(() => {
                this.props.history.push('/mail')
            })
    }

    render() {
        const { subject, mailId } = this.state.reply
        return (
            <div className="reply-main">
                <div className="reply-submit-container">
                    <div className="reply-bar flex">
                        <img src="apps/Mail/asset/svg/reply.svg"></img>
                        <li>Tair Bitan</li>
                    </div>

                    <form className="reply-form flex" onSubmit={() => this.onSaveReply(this.state.reply)}>
                        <textarea autoComplete="off" type="text" name="subject" value={subject} onChange={this.handleChange} />
                        <button type="submit" className="send-btn" >Send</button>
                    </form>
                </div>
            </div>

        )
    }
}