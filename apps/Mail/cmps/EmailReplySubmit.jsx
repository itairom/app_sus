import { MainNav } from "../../../cmps/MainNav.jsx";
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
        <MainNav />


        const { subject, mailId } = this.state.reply
        return (
            <div className="reply-container">
                <form className="reply-form flex" onSubmit={ ()=>this.onSaveReply(this.state.reply) }>
                    <label>
                        <textarea type="text" name="subject" value={subject} onChange={this.handleChange} />
                    </label>
                    <button type="submit" value="Send" />
                </form>
            </div>
        )
    }
}