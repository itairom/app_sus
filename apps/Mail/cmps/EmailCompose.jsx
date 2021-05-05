import { mailService } from '../services/mail-service.js'
import { utilService } from '../../../services/util-service.js'


export class EmailCompose extends React.Component {

    state = {
        mail: {
            subject: '',
            body: '',
            id: utilService.makeId(),
            isRead: false
        }
    }
    componentDidMount() {
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

        if (!this.state.mail) return <h2>loading2</h2>

        const { body, isRead, subject } = this.state.mail

        return (
            <div className="compose-mail flex">
                <form className="mail-form flex" onSubmit={()=>{ this.props.onSaveMail(this.state.mail)}}>
                    <label>subject
                    <input type="text" name="subject" value={subject} onChange={this.handleChange} />
                    </label>
                    <label>body
                    <textarea type="text" name="body" value={body} onChange={this.handleChange} />
                    </label>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}