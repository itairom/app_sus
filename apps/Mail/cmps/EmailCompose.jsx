import { utilService } from '../../../services/util-service.js'


export class EmailCompose extends React.Component {

    state = {
        mail: {
            subject: '',
            body: '',
            id: utilService.makeId(),
            isRead: false,
            replys:[]
        }
    }
    componentDidMount() {
        console.log(this.props);
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

    saveMail = (ev) => {
        ev.preventDefault()
        this.props.onSaveMail(this.state.mail)
    }

    render() {

        if (!this.state.mail) return <h2>loading2</h2>

        const { body, isRead, subject } = this.state.mail
        const { toggleCompose } = this.props.toggleCompose
        const { onSaveMail } = this.props
        return (
            <div className="compose-mail">
                <form className="mail-form " onSubmit={(ev) => this.saveMail(ev)}>
                    <label>
                        <input placeholder="Subject" type="text" name="subject" value={subject} onChange={this.handleChange} />
                    </label>
                    <label>
                        <textarea type="text" name="body" value={body} onChange={this.handleChange} />
                    </label>
                    <button type="submit"   className="send-btn" ></button>
                </form>
            </div>
        )
    }
}