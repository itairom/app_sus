import { mailService } from '../services/mail-service.js'
import { utilService } from '../../../services/util-service.js'


export class EmailCompose extends React.Component {

    state = {
        mail: {
            subject: null,
            body: null,
            id: utilService.makeId(),
            subject: null,
            isRead: false
        }
    }
    componentDidMount() {
    }

    onSaveMail = (ev) => {
        ev.preventDefault()
        mailService._saveMail(this.state.mail)
            .then(() => {
                
                // this.props.history.push('/mail')
            })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            mail: {
                ...prevState.mail,
                [field]: value
            }
        }))
    }

    render() {


        const { body, isRead, subject } = this.state.mail

        return (
            <div className="compose-mail flex">
                <form className="mail-form flex" onSubmit={this.onSaveMail}>
                    <label>subject
                    <input type="text" name="subject" value={subject} onChange={this.handleChange} />
                    </label>
                    <label>body
                    <textarea type="text" name="body" value={body} onChange={this.handleChange} />
                    </label>
                    <button>Save</button>
                </form>

            </div>
        )
    }
}