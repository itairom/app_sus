
import { mailService } from '../services/mail-service.js'
import { EmailReplaySubmit } from './EmailReplaySubmit.jsx'
import { EmailReplayList } from './EmailReplayList.jsx'



export class EmailDetails extends React.Component {

    state = {
        mail: null,
        isClicked: null,
        isReply: false
    }
    componentDidMount() {
        this.setState({ mail: this.props.mail })
    }

    
    toggleReply = (ev) => {
        ev.stopPropagation()
        this.setState((prevState) => {
            return { isReply: !prevState.isReply }
        })
    }

    render() {

        if (!this.state.mail) return <h2>loading2</h2>

        const { subject, body, isRead, id, replays } = this.state.mail

        return (
            <React.Fragment>
                {!this.props.isReply && <section className="mail-details">
                    <h1 className="mail-subject">{subject}</h1>
                    <p className="mail-body">{body}</p>
                    <h4 onClick={() => { this.props.onDeleteMail(id) }} >Delete</h4>
                    
                    {/* <Link to={`/mail/${id}/reply`}>Rep</Link> */}
                    <h4 onClick={(ev) => { this.toggleReply(ev) }}>Reply</h4>
                    {/* { (this.state.isReply) &&<EmailReplayList replays={replays} />} */}


                    
                    {/* {this.state.isReply && <EmailReplaySubmit  onSaveReplay={this.props.onSaveReplay} />} */}
                </section >}


            </React.Fragment>
        )
    }
}