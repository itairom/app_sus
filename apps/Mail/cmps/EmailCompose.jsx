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

    render() {

        if (!this.state.mail) return <h2>loading2</h2>

        const { body, isRead, subject } = this.state.mail
        const{toggleCompose}= this.props.toggleCompose
        return (
            <div className="compose-mail ">
                <form className="mail-form " onSubmit={(ev)=>{ this.props.onSaveMail(this.state.mail,ev)}}>
                    <label>
                    <input placeholder="Subject" type="text" name="subject" value={subject} onChange={this.handleChange} />
                    </label>
                    <label>
                    <textarea type="text" name="body" value={body} onChange={this.handleChange} />
                    </label>
                    <button type="button" onClick={()=>{this.props.toggleCompose()}} className="send-btn" >Send</button>
                </form>
            </div>
        )
    }
}